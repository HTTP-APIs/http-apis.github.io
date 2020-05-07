---
layout: page
title: Usage | Hydraecosystem.org
permalink: /01-Usage
---

# How to set up an Hydra server using hydrus

Table of contents
-------------
* [Setting up the server](#servsetup)
* [The API Documentation](#apidoc)
    * [Creating a new API Documentation](#newdoc)
    * [Use an existing API Documentation](#olddoc)
* [Setting up the database](#dbsetup)
* [Adding Classes and Properties](#classprop)
* [Server URL and the API name](#urls)
* [App factory](#appf)
* [Plug and Play](#pnp)
* [Running tests](#test)
* [API Authentication](/Auth)

<a name="servsetup"></a>
## Setting up the server
hydrus is a generic server that can serve a REST-based API using Hydra APIDocumentation to understand the type of data and the operations supported by the API. Getting a server running in hydrus is straightforward. Simply, create a script that plugs the API Documentation, the database along with a few other variables and start a hydrus app. An example of this is given below. In the following subsections, we will address each part of the script and show how to create your own API using your API Documentation.

```python
"""Demo script for setting up an API using hydrus."""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from hydrus.app_factory import app_factory
from hydrus.utils import set_session, set_doc, set_hydrus_server_url, set_api_name
from hydrus.data import doc_parse
from hydra_python_core import doc_maker
from hydrus.data.db_models import Base
from hydrus.conf import APIDOC_OBJ     # Can be replaced by any API Documentation

# Define the server URL, this is what will be displayed on the Doc
HYDRUS_SERVER_URL = "http://localhost:8080/"

# The name of the API or the EntryPoint, the api will be at http://localhost/<API_NAME>
API_NAME = "serverapi"

# Define the Hydra API Documentation
# NOTE: You can use your own API Documentation and create a HydraDoc object using doc_maker
#       Or you may create your own HydraDoc Documentation using doc_writer [see hydrus/hydraspec/doc_writer_sample]
apidoc = doc_maker.create_doc(APIDOC_OBJ, HYDRUS_SERVER_URL, API_NAME)

# Define the database connection
engine = create_engine('sqlite:///path/to/database/file')
# Add the required Models to the database
Base.metadata.create_all(engine)
# Start a session with the DB and create all classes needed by the APIDoc
session = sessionmaker(bind=engine)()

# Get all the classes from the doc
classes = doc_parse.get_classes(apidoc.generate())     # You can also pass a dictionary as defined in hydrus/hydraspec/doc_writer_sample_output.py
# Get all the properties from the classes
properties = doc_parse.get_all_properties(classes)
# Insert them into the database
doc_parse.insert_classes(classes, session)
doc_parse.insert_properties(properties, session)

# Create a hydrus app with the API name you want, default will be "api"
app = app_factory(API_NAME)

# Set the name of the API
with set_api_name(app, API_NAME):
    # Set the API Documentation
    with set_doc(app, apidoc):
        # Set HYDRUS_SERVER_URL
        with set_hydrus_server_url(app, HYDRUS_SERVER_URL):
            # Set the Database session
            with set_session(app, session):
                # Start the hydrus app
                app.run(host='127.0.0.1', debug=True, port=8080)
```

We will now break down each of these steps and understand what they do. Let's begin.

<a name="apidoc"></a>
## The APIDocumentation
Much of hydrus is built around the Hydra API Documentation. The API Doc is defined in the Hydra spec [here](http://www.hydra-cg.com/spec/latest/core/).
The API Doc is the entity that tells hydrus the way to set the server up, the endpoints that must be created, the data needs to be served, the operations supported by the data and so on.

A companion library called `hydra_python_core` provides all the core functions to hydrus which are important for making an API Doc. This is an internal dependency of hydrus so you do not need to install it separately. 

hydrus uses Python classes in `hydra_python_core.doc_writer` to create and define API Docs. A description of these classes and how they are designed can be found in the [Design](https://github.com/HTTP-APIs/hydrus/wiki/Design) section.

<!-- ![doc_writer](https://image.ibb.co/eWURkQ/doc_writer.png) -->

The `hydra_python_core.doc_writer.HydraDoc` object is crucial for hydrus to be able to set up the API. There are various ways you can create this object from your API Documentation:

<a name="newdoc"></a>
### Create a new API Documentation and a new `HydraDoc` object
The `doc_writer` can be used to create an API Doc itself as defined below:

The first step is to create a new `HydraDoc` object
```python
# Sample to create Hydra APIDocumentation using doc_writer

from hydra_python_core.doc_writer import HydraDoc

API_NAME = "demoapi"
BASE_URL = "https://hydrus.com/"
ENTRY_POINT = "api"
# API_NAME is the name of the api
# The API will be accessible at BASE_URL + ENTRY_POINT (http://hydrus.com/api/)

apidoc = HydraDoc(API_NAME,
                   "Title for the API Documentation",
                   "Description for the API Documentation",
                   ENTRY_POINT,
                   BASE_URL)
```

The API Documentation has been created, but it is not yet complete. Classes, properties, and operations must be added to the Doc. An EntryPoint object must also be generated because it is crucial for the API and for its operations to be discoverable by a Hydra Client.

We will now define a class for this API Documentation, which is of the type `HydraClass`
```python
from hydra_python_core.doc_writer import HydraClass

# Creating classes for the API
class_uri = "http://hydrus.com/dummyClass"  # URI of class for the HydraClass
class_title = "dummyClass"  # Title of the Class
class_description = "A dummyClass for demo"     # Description of the class
class_ = HydraClass(class_uri, class_title, class_description, endpoint=False)
# Setting endpoint=True creates an endpoint for the class itself, this is usually for classes that have single instances
# These classes should not ideally have a Collection, although hydrus allows creation of such Collections
```
Classes need to have properties that allow them to store information related to the class. Similar to attributes in a Python class, these are stored as `supportedProperty` of the `HydraClass`. Properties are defined as `HydraClassProp` objects:
```python

from hydra_python_core.doc_writer import HydraClassProp

# Create new properties for the class
prop1_uri = "http://hydrus.com/prop1"   # The URI of the class of the property
prop1_title = "Prop1"   # Title of the property
prop1 = HydraClassProp(prop1_uri, prop1_title , required=False, read=False, write=True)

prop2_uri = "http://hydrus.com/prop2"
prop2_title = "Prop2"
prop2 = HydraClassProp(prop1_uri, prop2_title, required=False, read=False, write=True)

# Properties that are required=True must be added during class object creation
# Properties that are read=True are readable
# Properties that are write=True are writable
```
Besides these properties, classes also need to have operations that can modify the data stored within their instances. These operation are defined as `HydraClassOp` and are stored in `supportedOperation` of the `HydraClass`.

```python
from hydra_python_core.doc_writer import HydraClassOp, HydraStatus

# Create operations for the class
op_name = "UpdateClass"  # The name of the operation
op_method = "POST"  # The method of the Operation [GET, POST, PUT, DELETE]
op_expects = "vocab:dummyClass"  # URI of the object that is expected for the operation
op_returns = None   # URI of the object that is returned by the operation
op_status = [HydraStatus(code=200, title="dummyClass updated.")]   # List of statusCode for the operation

op1 = HydraClassOp(op_name,
                   op_method,
                   op_expects,
                   op_returns,
                   op_status)
```

Once the classes and properties have been defined, add them to the class.

```python
# Add the operation and properties to the Class
class_.add_supported_prop(prop1)
class_.add_supported_prop(prop2)

class_.add_supported_op(op1)
```
After defining a class along with its properties and operations, add this class to the APIDocumentation.

```python
# Add the class to the HydraDoc
apidoc.add_supported_class(class_, collection=True)

# NOTE: Using collection=True creates a HydraCollection for the class.
#       The name of the Collection is class_.title+"Collection"
#       The collection inherently supports GET and PUT operations
```

Other than this, an API Documentation also needs to have the [Resource](http://www.w3.org/ns/hydra/core#Resource) and the [Collection](http://www.w3.org/ns/hydra/core#Collection) classes, so that the server can identify the class members. This can be done automatically using the `add_baseResource` and `add_baseCollection` methods.

```python
# Other operations
apidoc.add_baseResource()  # Creates the base Resource Class and adds it to the API Documentation
apidoc.add_baseCollection()    # Creates the base Collection Class and adds it to the API Documentation
```
Finally, create the EntryPoint object for the API Documentation. All Collections are automatically assigned endpoints in the EntryPoint object. Classes that had their `endpoint` variables set to `True` are also assigned endpoints in the EntryPoint object. This object is created automatically by the `HydraDoc` object and can be created using the `gen_EntryPoint` method.
```python
apidoc.gen_EntryPoint()    # Generates the EntryPoint object for the Doc using the Classes and Collections
```
The final API Documentation can be viewed by calling the `generate` method which returns a Python dictionary containing the entire API Documentation. The `generate` method can be called for every class defined in the `doc_writer` module to generate its own Python dictionary.
```python
doc = apidoc.generate()  # Returns the entire API Documentation as a Python dict
```
The complete script for this API Documentation can be found in `hydrus/samples/doc_writer_sample.py`, and the generated ApiDocumentation can be found in `hydrus/samples/doc_writer_sample_output.py`.

<a name="olddoc"></a>
### Use an existing API Documentation to create a new `HydraDoc` object

In case you already have an API Doc defined in JSON or in a Python dict, hydrus provides a way to turn this API Doc into `doc_writer` classes. This is done using `hydra_python_core.doc_maker` as defined below:
```python
# Sample to convert the API Doc into doc_writer classes

from hydra_python_core.doc_maker import create_doc

# Note: It would be better to use json.loads from the python json library to create 'doc'
doc = {
  "@context": "http://www.w3.org/ns/hydra/context.jsonld",
  "@id": "http://api.example.com/doc/",
  "@type": "ApiDocumentation",
  "title": "The name of the API",
  "description": "A short description of the API",
  "entrypoint": "URL of the API's main entry point",
  "supportedClass": [
    # ... Classes known to be supported by the Web API ...
  ],
  "possibleStatus": [
    # ... Statuses that should be expected and handled properly ...
  ]
}

APIDoc = create_doc(doc, HYDRUS_SERVER_URL="https://hydrus.com", API_NAME="demoapi")
# HYDRUS_SERVER_URL and API_NAME are optional parameters. If not defined, the default values from the doc object are used.
```
Make sure that `doc` is a Python dictionary and all objects defined are according to the Hydra [spec](www.hydra-cg.com/spec/latest/core/).
JSON variables can such as `true`, `false` and `null` can be used as strings. Python variants such as `True`, `False` and `None` can also be used.

<a name="dbsetup"></a>
## Setting up the database
Now that the API Documentation has been defined, the next thing hydrus needs to function is a database to store the resources of the API. hydrus has its own database models that are generic and can be used for most APIs. More information about these can be found in the [Design](https://github.com/HTTP-APIs/hydrus/wiki/Design) section.

The databse models use SQLAlchemy as an ORM Layer mapping relations to Python Classes and Objects. A good reference for the ORM can be found [here](http://docs.sqlalchemy.org/en/rel_1_0/orm/tutorial.html).
Here is how to create a new connection and the necessary models for hydrus to use:

A new connection to a database can be created as follows:
```python
from sqlalchemy import create_engine

engine = create_engine('sqlite:///path/to/database/file')
```
This engine acts as a connection on which we can create sessions to interact with the database. Any other database can be used, but we have used SQLite for the purpose of this demo. A list of possible database and how to connect to them can be found [here](http://docs.sqlalchemy.org/en/rel_1_0/orm/tutorial.html).

Once we have connected to the database, we need to create the necessary models from hydrus:

```python
from hydrus.data.db_models import Base

Base.metadata.create_all(engine)
```
This will successfully create all required models in the connected database. The information of the API, however, is still not available in these models. To make them available, use the API Doc to add metadata about the classes and their properties in the database. This can be done using the API Documentation object.

<a name="classprop"></a>
## Adding Classes and Properties
To add the classes and properties to hydrus, we need the same database `engine` which we earlier created the models for hydrus. Add metadata to this by using the HydraDoc object. This can be done using the `doc_parse` module in hydrus.

```python
from hydrus.data import doc_parse
from hydra_python_core import doc_maker
from sqlalchemy.orm import sessionmaker

ApiDocumentation = {
    "@context": "http://www.w3.org/ns/hydra/context.jsonld",
    "@id": "http://api.example.com/doc/",
    "@type": "ApiDocumentation",
    "title": "The name of the API",
    "description": "A short description of the API",
    "entrypoint": "URL of the API's main entry point",
    "supportedClass": [
        # ... Classes known to be supported by the Web API ...
        {
            "@context": "http://www.w3.org/ns/hydra/context.jsonld",
            "@id": "http://api.example.com/doc/#Comment",
            "@type": "Class",
            "title": "The name of the class",
            "description": "A short description of the class.",
            "supportedProperty": [
            # ... Properties known to be supported by the class ...
            ]
        },
    ],
    "possibleStatus": [
        # ... Statuses that should be expected and handled properly ...
    ]
}

db_session = session = sessionmaker(bind=engine)()

doc = doc_maker.create_doc(ApiDocumentation)

classes = doc_parse.get_classes(doc.generate())
properties = doc_parse.get_all_properties(classes)

doc_parse.insert_classes(classes, session=db_session)
doc_parse.insert_properties(properties, session=db_session)
```
**NOTE:** You can use the `ApiDocumentation` dictionary directly to get the classes and properties, but it is advised to use the `HydraDoc` object to generate the ApiDocumentation. Otherwise, there may be unwanted errors in the dictionary that are permanently added to the database.

<a name="urls"></a>
## Server URL and the API name
hydrus needs to know the server URL defined as `HYDRUS_SERVER_URL` at which it is hosted and the API name defined as `API_NAME` which also serves as the entrypoint for the API.

These are used to define IDs for objects/resources that hydrus serves. For example, a hydrus server hosted at `https://hydrus.com/api` must return objects with ID `@id: https://hydrus.com/api/dummyClass/1`.

It is essential for hydrus to know this because the Hydra spec requires IDs for objects to be dereferencable links.
Since most servers use an interface to link with the application or backend process, these things must be provided during setup and cannot be found out by hydrus on its own.

<a name="appf"></a>
## App factory
The API name must also be used for hydrus to create an app. The `app_factory` method creates an API with all routes directed at `/[API_NAME]`. For example, if an app is created using the `API_NAME` as `"demoapi"`, all operations for the API will be at the route `/demoapi/..`. The API name serves as the entrypoint for the application. Create an app using the `API_NAME` as follows:

```python
from hydrus.app_factory import app_factory

API_NAME = 'demoapi'

# Create a hydrus app with the API name you want, default will be "api"
app = app_factory(API_NAME)
```
<a name="pnp"></a>
## Plug and Play
Once everything needed to create a Hydra based API is in place, connect them to each other. This is done by using the methods defined in the `hydrus.utils` module. The use of these pluggable modules requires an app context which is a variant of the Python `context`, similar to the request context in most servers. Due to this, the Python keyword `with` must be used to create a context in which the application must run. This is done as follows:
```python
from hydrus.utils import set_api_name, set_doc, set_session, set_hydrus_server_url

# Set the name of the API
with set_api_name(app, API_NAME):
    # Set the API Documentation
    with set_doc(app, apidoc):
        # Set HYDRUS_SERVER_URL
        with set_hydrus_server_url(app, HYDRUS_SERVER_URL):
            # Set the Database session
            with set_session(app, session):
                # Start the hydrus app
                app.run(host='127.0.0.1', debug=True, port=8080)
```
The hydrus app is a modified instance of the Flask app with the required operations and routes predefined. All options and operations on the app object will be the same as those done in the Flask app.

<a name="test"></a>
## Running tests
Will be added once dynamic tests are in place.

