# Our Inspiration
Building Web APIs seems still more an art than a science. How can we build APIs such that generic clients can easily use them? And how do we build those clients? Current APIs heavily rely on out-of-band information such as human-readable documentation and API-specific SDKs. However, this only allows for very simple and brittle clients that are hardcoded against specific APIs. Hydra, in contrast, is a set of technologies that allow to design APIs in a different manner, in a way that enables smarter clients.

You can read more [here](http://www.hydra-cg.com/)

# About Hydrus
Hydrus is a set of Python based tools for easier and efficient creation of Hypermedia driven REST-APIs. Hydrus utilises the power of [Linked Data](https://en.wikipedia.org/wiki/Linked_data) to create a powerful REST APIs to serve data. Hydrus uses the [Hydra(W3C)](http://www.hydra-cg.com/) standard for creation and documentation of it's APIs.

## Features
Hydrus supports the following features:
* A client that can understand Hydra vocabulary and interacts with a Hydra supporting server to basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on data.
* A generic server that can serve required data and metadata(in the form of API documentation) to a client over HTTP.
* A middleware that allows users to use the client to interact with the server using Natural Language which is processed machine consumable language. **(under developement)**

# How do I get started?
Getting started is pretty easy. Head over to our [community page](http://www.hydra-cg.com/). There are a lot of demos, presentations, and talks to get you up to speed. Then head over to the [Hydrus repo](https://github.com/HTTP-APIs/hydrus) and clone it. Play with it a little, try to understand how the current implementation works, try to fix some bugs or report any issues you can find [here](https://github.com/HTTP-APIs/hydrus/issues).

Lastly, don't hesitate to reach out if you have any question, we are very friendly people and we'll be more than happy to help you out.
## Communication Channels
* [Gitter](https://gitter.im/HTTP-APIs/Lobby)
* [W3C Group](https://www.w3.org/community/hydra/)
* Email 
  * [Lorenzo Moriondo](mailto:tunedconsulting@gmail.com)
  * [Akshay Dahiya](mailto:xadahiya@gmail.com)
  * [Chris Andrew](mailto:chris.g14@iiits.in)
  * [Kristian Koci](mailto:kristian.koci@gmail.com)

# Project Ideas

# Ideas related to Hydrus Server
The ideas are arranged in increasing order of difficulty. Please feel free to combine several ideas into your proposal.

## 1. Design a Command line interface for Hydrus

### Description
Although Hydrus is primarily a Python-based library right now, most Hydra users may not be familiar with Python to set up servers. It would be great if we could have a CLI for Hydrus where users would just need to pass parameters to set up a server and get it up and running. Also, the current process of server setup is long and needs a lot of prerequisite knowledge to be able to set up. This process needs to be abstracted to make it simpler, and more powerful for a user to have more control over the server. Maybe something similar to Python’s SimpleHTTPServer.

### Skills Required
* Python
* Git
* Flask
* Command Line 
* Basic knowledge of Semantic Web and Graph Databases
* Ability to learn new technologies quickly
* Ability to write test suites

### Difficulty Level - Easy to Intermediate

### Related Links
* [Hydrus Repo](https://github.com/HTTP-APIs/hydrus)
* [Hydrus Wiki](https://github.com/HTTP-APIs/hydrus/wiki/)
* [The book of Hydrus](https://gsocchrizandr.wordpress.com/the-book-of-hydrus/)
* [Hydra Draft](https://www.hydra-cg.com/spec/latest/core/)

### Potential Mentors
......

## 2. Better API Querying
### Description
Right now, we only have no mechanism for searching an instance of a class in the Hydra API. Most APIs implement a search feature where the data is queried using a defined syntax. This is more of an issue with Hydra itself as the mechanism for search is not defined in Hydra yet. It would be great if we can have some advance querying functionality like they have in graph databases.

### Skills
* Flask
* Python
* Sqlalchemy
* Basic knowledge of graph querying languages
* PostgreSQL
* Ability to learn new technologies quickly
* Basic knowledge of Semantic Web
* Ability to write test suites

### Difficulty Level - Intermediate

### Related Links
* [Hydrus Database Design](https://github.com/HTTP-APIs/hydrus/wiki/Design#dbdesign)
* [The book of Hydrus](https://gsocchrizandr.wordpress.com/the-book-of-hydrus/)
* [Hydra Draft](https://www.hydra-cg.com/spec/latest/core/)
* [Graph Querying Languages Overview](https://developer.ibm.com/dwblog/2017/overview-graph-database-query-languages/)

### Potential Mentors

## 3. Python Client Implementation
### Description
Implement a generic Hydra client that can reference an API Documentation and allow users to interact with an API using objects, rather than URIs/paths. The HydraConsole is a good reference client to use, and we could extend functionality and implement a Python version of it. More ideas are welcome on this.

### Skills
* Strong Knowledge of Graphs
* At least basic knowledge of RDF
* JSON and JSON-LD
* Python
* Basic knowledge of Semantic Web
* Ability to learn new technologies quickly
* Ability to write test suites

### Difficulty Level - Intermediate to Hard

### Related Links
* [Current implementation by @pchampin](https://github.com/pchampin/hydra-py)
* [RDF overview](https://www.w3.org/RDF/)
* [JSON-LD wiki](https://en.wikipedia.org/wiki/JSON-LD)
* [The book of Hydrus](https://gsocchrizandr.wordpress.com/the-book-of-hydrus/)
* [Hydra Draft](https://www.hydra-cg.com/spec/latest/core/)
* [Hydra Console](http://www.markus-lanthaler.com/hydra/console/)

### Potential Mentors
....

## 4. Switch to Python Falcon server
### Description
Falcon is a minimalist WSGI library for building speedy web APIs and app backends. When it comes to building HTTP APIs, other frameworks weigh you down with tons of dependencies and unnecessary abstractions. Falcon cuts to the chase with a clean design that embraces HTTP and the REST architectural style. Hydrus is currently implemented using Flask, we're thinking about switching to Falcon.

### Skills
* Python
* Git
* Sqlalchemy
* Falcon Web Framework
* Basic knowledge of Semantic Web and Graph Databases
* Ability to learn new technologies quickly
* Ability to write test suites

### Difficulty Level - Intermediate

### Related Links
* [Falcon docs](http://falcon.readthedocs.io/en/latest/)
* [Creating resources with Falcon](http://falcon.readthedocs.io/en/latest/user/tutorial.html#creating-resources)
* [Hydrus Repo](https://github.com/HTTP-APIs/hydrus)

### Potential Mentors
.....

## 5. More User defined Controls for the server
### Description
There is no way right now to actually change the way the client accesses the server set up by Hydrus. Although there is some support for Authentication/Authorization, the actual implementations are very basic and do not offer much security features. There is also no way to control server access or limit/modify user privilege. There may be APIs that provide different levels of access to different users. There are also bottlenecks in place in REST APIs that limit the number of requests each user can make, such control is not given to users. There needs to be a way to add additional controls to the server, that can be built on top of the original Hydrus app.

### Skills
* Python
* Flask
* Git
* Strong knowledge of Authentication and Authorization in various APIs
* Basic Knowledge of Semantic Web
* Ability to learn new technologies quickly
* Ability to write test suites

### Difficulty Level - Hard

### Related Links
* [Hydrus](https://github.com/HTTP-APIs/hydrus/)

### Potential Mentors
....


# Ideas Related to Demos using Hydrus

## 1. Demonstration with Dynamic API paths
### Description
If we can create an API whose structure(paths to different kinds of data) is constantly changing only the vocab path stays same. Then we can use a Hydra client to discover the required paths for various kinds of data. This can be a great way to demonstrate the capabilities and use cases of HTTP-APIs and Hydra in general. We can have a UI showing the API structure in real-time and allow users to POST/GET/PUT/DELETE any type of data. We can also show how the client and API server interact with each other ( We had a lot of requests going on in the drone demo and it was very difficult to understand how things are working in the background.) For example: Suppose we have a Student class with basic properties like Name, Id, Class etc. Then the user can request for data say "Students with Id = 1*" without knowing anything about the API structure as it's dynamic. We can also demonstrate advanced querying features with this.

### Skills
* Python
* Linux
* Server management
* At least basic knowledge of DevOps
* HTML, CSS, JS
* Knowledge of any Javascript framework is a plus ( React Js or Vue Js)
* Basic Knowledge of Semantic Web
* High problem-solving abilities
* Ability to write test suites

### Difficulty Level - Intermediate to Hard

### Related Links
* [Hydrus](https://github.com/HTTP-APIs/hydrus/)
* [A sample drone simulation](https://github.com/HTTP-APIs/hydra-flock-demo)

### Potential Mentors
.....

## 2. Satellite and Subsystems Demo
### Description
We may finally end up implementing the astronomy/satellites vocabulary as thought in the beginning. We need a way to demonstrate how Hydra can be utilized by Satellites to communicate with each other and get information about each of their subsystems and statuses. The OWL Vocabulary for Subsystems is given [here](https://github.com/chronos-pramantha/RDFvocab). We need to create a Hydra Spec for a demo system that will use these ontologies for a demo.

### Skills
* Python
* Linux
* Server management
* At least basic knowledge of DevOps
* HTML, CSS, JS
* Knowledge of any Javascript framework is a plus ( React Js or Vue Js)
* Basic Knowledge of Semantic Web
* High problem-solving abilities
* Ability to write test suites

### Difficulty Level - Intermediate to Hard

### Related Links
* [Hydrus](https://github.com/HTTP-APIs/hydrus/)
* [A sample drone simulation](https://github.com/HTTP-APIs/hydra-flock-demo)

### Potential Mentors
...

## 3. Rail Management System
### Description
We can have a cool demo about railway management where trains are routed based on available tracks and are assigned platforms and routes based on live information taken from several trains. This could be a good demo to showcase how Hydra can be used as a generic language since not all railway stations would use the same API to convey information to trains. We could have multiple Hydra based APIs running on railway stations and trains and all of them communicating with each other using Hydra and a common Vocabulary. We still need to find a vocabulary for this, or we could also create one.

### Skills
* Python
* Linux
* Server management
* At least basic knowledge of DevOps
* HTML, CSS, JS
* Knowledge of any Javascript framework is a plus ( React Js or Vue Js)
* Basic Knowledge of Semantic Web
* High problem-solving abilities
* Ability to write test suites

### Difficulty Level - Intermediate to Hard

### Related Links
* [Hydrus](https://github.com/HTTP-APIs/hydrus/)
* [A sample drone simulation](https://github.com/HTTP-APIs/hydra-flock-demo)

### Potential Mentors
...


# Other
## 1. Create a QGIS plugin
### Description
Create a QGIS plugin that works with hydrus. QGIS is an opensource geospatial client, geospatial clients are used to load maps in different formats (images, rasters, vectors). QGIS can work as an HTTP client to fetch data from special Web services called OGC Web Standards (WMS, WMTS, WFS). Plugin for QGIS can be developed in Python, a QGIS-HYDRA plugin may be able to query geospatial data stored in hydrus using the HYDRA vocabulary. The same functionality could be accomplished with a MapBox or LeafLet client app that uses a python-hydra client as middleware and hydrus as a backend.

### Skills
* Python
* Git
* Basic knowledge of Semantic Web and Graph Databases
* Ability to learn new technologies quickly
* Ability to write test suites
* Ability to write test suites

### Difficulty Level - Hard

### Related Links
* [QGIS Homepage](https://qgis.org/en/site/)
* [QGIS Github Repo](https://github.com/qgis)
### Potential Mentors
...
