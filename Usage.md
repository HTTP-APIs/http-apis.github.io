This page explains the basic usage and setting up a Hydra server using Hydrus.

Table of contents
-------------
* [Setting up the database](#dbsetup)
* [Adding data](#adddata)
    * [Classes and Properties](#classprop)
    * [Instances](#instance)
* [Setting up a new server from OWL vocabulary](#setup)
* [Manipulating data](#moddata)
    * [CRUD operations](#crud)
    * [Exceptions](#error)
* [Setting up the server](#servsetup)
* [Running tests](#test)
* [Using the client](#useclient)

<a name="dbsetup"></a>
## Setting up the database
The databse models use SQLAlchemy as an ORM Layer mapping relations to Python Classs and Objects. A good reference for the ORM can be found [here](http://docs.sqlalchemy.org/en/rel_1_0/orm/tutorial.html)

The `engine` parameter in `hydrus.data.db_models` is used to connect to the database. This needs to be modified according to the type of connection:
For example, if the database is an SQLite database, the engine parameter would be as follows:

```python
from sqlalchemy import create_engine

hydrus.data.db_models.engine = create_engine('sqlite:///path/to/database/file')
```
Once the engine is setup, the creation of the required tables can be done as follows:

```python
from hydrus.data.db_models import Base

Base.metadata.create_all(hydrus.data.db_models.engine)
```
This will successfully create all required models in the specified database.

<a name="adddata"></a>
## Adding data
Now that the database models have been setup, we need to populate them with data.

<a name="classprop"></a>
### Adding Classes and Properties
The first step in adding data is adding the RDFClasses and Properties that the server must support. There are three ways to do this:

The first is to manually add all RDFClasses and Properties. Here are some examples:
```python
'''Adding a new RDFClass'''
from hydrus.data.db_models import RDFClass, engine
from sqlalchemy.orm import sessionmaker

thermal = RDFClass(name="Subsystem_Thermal")    # Creates a new RDFClass instance

# Add the instance to the database
Session = sessionmaker(bind=models.engine)
session = Session()
session.add(thermal)
session.commit()
session.close()
```
```python
'''Adding a new Property'''
from hydrus.data.db_models import AbstractProperty, InstanceProperty, engine
from sqlalchemy.orm import sessionmaker

subclassof = AbstractProperty(name="SubClassOf")    # Creates a new AbstractProperty instance
cost = InstanceProperty(name="hasMonetaryValue")    # Creates a new InstanceProperty instance

# Add the instance to the database
Session = sessionmaker(bind=models.engine)
session = Session()
session.add(subclassof)
session.add(cost)
session.commit()
session.close()
```
The second way to add RDFClasses and Properties is to provide the Hydra APIDocumentation of the API
```python
import hydrus

data = {
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

classes = hydrus.data.doc_parse.get_classes(data)
properties = hydrus.data.doc_parse.get_all_properties(classes)
hydrus.data.doc_parse.insert_classes(classes)
hydrus.data.doc_parse.insert_properties(classes)
```

The final way to add classes and properties to Hydrus is to use RDF/OWL definitions of the classes. This can be done by using the OWL/RDF parser to create Hydra APIDocumentation and then adding data as explained in the previous step.
```python
from hydrus.hydraspec import parser

data = {
    {
       "@type": [
          {
              "@id": "http://www.w3.org/2002/07/owl#ObjectProperty"
          }
       ],
       "@id": "http://api.example.com/doc/#Property",
       "rdf:label": "Propertyname"
    },
    {
       "@type": "http://www.w3.org/2002/07/owl#Class",
       "@id": "http://api.example.com/doc/#Class",
       "rdf:comment": "comment about the class",
       "rdf:label": "Classname",
       "rdfs:subClassOf": [
            # ...List of known class restrictions...
       ],
    }
}

owl_props = parser.get_all_properties(data)     # Get all Owl:Properties

hydra_props = parser.hydrafy_properties(owl_props)      # Convert them to Hydra:Property along with class metadata

owl_classes = parser.get_all_classes(subsystem_data)    # Get all the owl:Classes

hydra_classes = parser.hydrafy_classes(owl_classes, hydra_props)    # Convert each owl:Class into a Hydra:Class with property data

apidoc = gen_APIDoc(hydra_classes)      # Create API Documentation with the Hydra:supportedClass
```
---
### Adding Instances/Resources
To add objects to the instances for a given class, we first need to define a standard way of declaring instances.
We have given an example of a subsystem instance below
```python
instance = {
    "name": "12W communication",    # The name of the instance must be in "name"
    "object": {
        # The "object" key contains all the properties and their values for a given instance
        "maxWorkingTemperature": 63,    # InstanceProperty: Value, Value is automatically converted to Terminal Object

        # In case the Value for a property is another Resource, we use the following syntax
        "hasDuplicate":{
            "@id": "subsystem/34"   # The "@id" tag gives the ID of the other instance
        }

        # In case the property is an AbstractProperty, the class name should be given as Value
        "category": "Spacecraft_Communication",     # AbstractProperty: Classname, Classname is automatically mapped to relevant RDFClass
    }
}

```
Once we have defined such an `instance`, we can use the built-in CRUD operations of Hydrus to add these instances.
```python
from hydrus.data import crud

crud.insert(object_=instance)   # This will insert 'instance' into Instance and all other information into Graph.

# Optionally, we can specify the ID of an instance if it is not already used
crud.insert(object_=instance, id_=1)    #This will insert 'instance' with ID = 1  
```

<a name="setup"></a>
## Setting up a Hydra server from OWL vocabulary
Setting up a new Hydra server from Hydrus is pretty straightforward and involves the following steps:
### 1. The first step is parsing the `HydraClasses` and their `SupportedProperties` from the OWL vocabulary.
To setup a new Hydra server you need to provide an OWL vocabulary. 

`Hydrus.hydraspec.parser` can be used to generate parsed classes. Just import the OWL vocabulary in `parser.py` and run it.<br/> It will parse and convert all the OWL classes and properties into `HydraClasses` and their `SupportedProperties`. 

For example - 
We have the `Subsystem` OWL vocabulary defined in `Hydrus.metadata.subsystem_vocab_jsonld`.

Import this into `parser.py` using
```python
from hydrus.metadata.subsystem_vocab_jsonld import subsystem_data
```
Pass this vocab to data
```python
if __name__ == "__main__":
    # NOTE: Usage must be in the following order
        # get_all_properties() >> hydrafy_properties() >> properties
        # get_all_classes() + properties >> hydrafy_classes() >> classes
        # classes >> gen_APIDoc()

    data = subsystem_data
    # Get all the owl:ObjectProperty objects from the vocab
    owl_props = get_all_properties(data)
    ......
``` 
Running the `parser.py` will return `HydraClasses` and their `SupportedProperties`.<br/> 
We can save this as `parsed_classes` using Output redirection `python parser.py > parsed_classes` should do it!<br/>
Now we're ready to move forward. The next steps involve generating a Hydra vocabulary and various contexts.

### 2. Generating `HydraVocab` from parsed classes
`Hydrus.hydraspec.vocab_generator` can be used to generate a Hydra Vocabulary from the parsed classes. Vocab generator mainly consists `gen_vocab()` function.
```python
def gen_vocab(parsed_classes, server_url, item_type, item_semantic_url):
```
We need to pass the following variables into `gen_vocab()` for generation of a Hydra Vocabulary
* `parsed_classes` - Use the classes parsed earlier from the OWL vocabulary.
* `server_url` - Url where the server is hosted.
* `item_type` - Item type can be anything depending upon what is being served by the API. For example in Subsystems example `item_type = Cots`.
* `item_sematic_url` - Semantic reference of the Item.

Vocab generator uses a Hydra Vocabulary template `vocab_template` to generate the required hydra vocabulary.

After passing all these variables, simply running the `vocab_generator.py` will create a Hydra vocabulary for the server.<br/>
Use Output redirection to save it, `python vocab_generator.py > vocab` should do it!

### 3. Generating the `Entrypoint` and `Entrypoint_context`
* #### Entrypoint Generator
`Hydrus.hydraspec.entrypoint_generator` uses an Entrypoint template to generate the required Entrypoint data.
```python
def gen_entrypoint(server_url, item_type):
    """Generate EntryPoint."""
    SERVER_URL = server_url
    ITEM_TYPE = item_type

    entrypoint_template = {
      "@context": SERVER_URL + "api/contexts/EntryPoint.jsonld",
      "@id": SERVER_URL + "api/",
      "@type": "EntryPoint",
      ITEM_TYPE.lower(): "api/%s/" % (ITEM_TYPE.lower())
    }

    return json.dumps(entrypoint_template, indent=4)
```
* #### Entrypoint Context Generator
`Hydrus.hydraspec.entrypoint_context_generator` also uses a similar template to generate the entrypoint context.
```python

def gen_entrypoint_context(server_url, item_type):
    """Generate context for the EntryPoint."""
    SERVER_URL = server_url
    ITEM_TYPE = item_type

    entrypoint_context_template = {
        "@context": {
            "hydra": "http://www.w3.org/ns/hydra/core#",
            "vocab": SERVER_URL + "/api/vocab#",
            "EntryPoint": "vocab:EntryPoint",
            ITEM_TYPE.lower(): {
                "@id": "vocab:EntryPoint/"+ITEM_TYPE,
                "@type": "@id"
            }
        }
    }

    return json.dumps(entrypoint_context_template, indent=4)
```

Both the `Hydrus.hydraspec.entrypoint_generator` and `Hydrus.hydraspec.entrypoint_context_generator` can be used to generate `Entrypoint` and `Entrypoint_context` data.

### 4. Binding all the generated data in `Hydrus.app`
`Hydrus.app` is the main `Flask` application from where all the Contexts and endpoints are server.<br/>
The implementation of `app.py` is pretty straightforward.

Modify `Hydrus.app` to use the generated data (`vocab`, `entrypoint` and `entrypoint_context`) and change the endpoints depending upon your requirements.<br/>
Endpoints are defined in `api.add_resource` like this:

```python
# Needs to be changed manually
api.add_resource(Item, "/api/<string:type_>/<int:id_>", endpoint="cots")
```

### 5. Starting the API server
Use [these](https://github.com/HTTP-APIs/hydrus/wiki#demo) instruction to start your hydra development server locally.<br>
**NOTE**: You'll have to modify the OWL vocabulary references in these instructions too.


<a name="moddata"></a>
## Manipulating data
We already saw how `insert` work in the previous section, we will now see how the other crud operations work and what are the errors and exceptions for each of them.

<a name="crud"></a>
### CRUD opertions
Apart from `insert`, the CRUD operations also support `get`, `delete` and `update` opertions. Here are examples for all three:

GET
```python
from hydrus.data import crud
import json

instance = crud.get(id_=1)     # Return the Resource/Instance with ID = 1
print(json.dumps(instance, indent=4))
# Output:
# {
#     "name": "12W communication",
#     "object": {
#         "category": "Spacecraft_Communication",
#         "hasMass": 98,
#         "hasMonetaryValue": 6604,
#         "hasPower": -61,
#         "hasVolume": 99,
#         "maxWorkingTemperature": 63,
#         "minWorkingTemperature": -26
#     }
# }
```
DELETE
```python
from hydrus.data import crud
import json

output = crud.delete(id_=1)     # Deletes the Resource/Instance with ID = 1
print(json.dumps(output, indent=4))
# Output:
# {
#   204: "Object with ID : 1 successfully deleted!"
# }
```
UPDATE
```python
from hydrus.data import crud
import json

new_object = {
    "name": "14W communication",
    "object": {
        "category": "Spacecraft_Communication",
        "hasMass": 8,
        "hasMonetaryValue": 6204,
        "hasPower": -10,
        "hasVolume": 200,
        "maxWorkingTemperature": 63,
        "minWorkingTemperature": -26
    }
}
output = crud.update(id_=1, object_=new_object)     # Updates the Resource/Instance with ID = 1 with new_object
print(json.dumps(output, indent=4))
# Output:
# {
#   204: "Object with ID : 1 successfully updated!"
# }
```
---
<a name="error"></a>
### Exceptions
The CRUD operations have a number of checks and conditions in place to ensure validity of data. Here are the exceptions that are returned for each of the operations when these conditions are violated.
NOTE: Relevant all responses are returned in JSON format

GET
```python
# A 404 error is returned when an Instance is not found
{
    404: "Instance with ID : 2 NOT FOUND"
}
```

INSERT
```python
# A 400 error is returned when an instance with a given ID already exists
{
    400: "Instance with ID : 1 already exists"
}

# A 401 error is returned when a given AbstractProperty: Classname pair has an invalid/undefined RDFClass
{   
    401: "The class dummyClass is not a valid/defined RDFClass"
}

# A 402 error is returned when a given Property: Value pair has an invalid/undefined Property
{
    402: "The property dummyProp is not a valid/defined Property"
}

# A 403 error is returned when a given InstanceProperty: Instance pair has an invalid/undefined Instance ID
{   
    403: "The instance 2 is not a valid Instance"
}
```

DELETE
```python
# A 404 error is returned when an Instance is not found
{
    404: "Instance with ID : 2 NOT FOUND"
}
```

The `update` operation is a combination of a `delete` and an `insert` operation. All exceptions for both the operation are inherited by update.

<a name="servsetup"></a>
### Setting up the server
The following section explains how the server needs to be setup to be able to serve the data we added in the previous section.

The generic server is implemented using the [Flask](http://flask.pocoo.org/) micro-framework. To get the server up and running, all you need to do is:
```python
from hydrus.app import app

IP = "127.0.0.1"
port_ = 8000
app.run(host=IP, port=port_)

# The server will be running at http://127.0.0.1:8000/
```

<a name="test"></a>
## Running tests
There are a number of tests in place to ensure that Hydrus functions properly.
For running tests related to ensuring the validity of the database run

**`python -m unittest hydrus.data.test_db`**

For running client side tests related to the server, run

**`python -m unittest hydrus.test_app`**

<a name="useclient"></a>
## Using the client
(Under developement) client not yet ready
