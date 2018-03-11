hydrus
===================

### RDF
RDF is widely known as the technology which makes possible the [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) by allowing the representation of data as [Linked Data](https://en.wikipedia.org/wiki/Linked_data).
[RDF is a W3C standard](https://www.w3.org/RDF/) that allows the representation of Knowledge in specific Domain as Knowledge Graphs. Quanta of information are represented as "triples": statements that relate a subject to an object by a predicate. Triples can be stored in different formats, the format used in Hydra and hydrus is [JSON-LD](https://json-ld.org/). 

### Hydra
Hydra is a framework to enable REST API to be described semantically. It is based on JSON-LD and proposed as [W3C draft](https://www.hydra-cg.com/spec/latest/core/).


**hydrus** (fully lowercase) is the flagship server in the ecosystem. It is a Flask server meant to build and deploy Hydra-based Web APIs in a straightforward and effective way. It uses Docker as virtualization and isolation technology (see Usage). Other tools, as dedicated clients for testing, instances running with others frameworks, parsers/translators to other standards, are in the same ecosystem.

hydrus is a set of **Python** based tools for easier and efficient creation of Hypermedia driven REST-APIs. hydrus utilises the power of [Linked Data](https://en.wikipedia.org/wiki/Linked_data) to create a powerful REST APIs to serve data.
hydrus uses the [Hydra(W3C)](http://www.hydra-cg.com/) standard for creation and documentation of it's APIs.

Table of contents
-------------
* [Features](#features)
* [Requirements](#req)
* [Demo](#demo)
* [Usage](#usage)
* [Design](#design)

<a name="features"></a>
Features
-------------
hydrus supports the following features:
- A client that can understand Hydra vocabulary and interacts with a Hydra supporting server to basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on data.
- A generic server that can serve required data and metadata(in the form of API documentation) to a client over HTTP.
- A middleware that allows users to use the client to interact with the server using Natural Language which is processed machine consumable language. **(under developement)**

<a name="req"></a>
Requirements
-------------
The system is built over the following standards and tools:
- [Flask](http://flask.pocoo.org/) a Python based micro-framework for handling server requests and responses.
- [JSON-LD](http://json-ld.org/spec/latest/json-ld/) as the prefered data format.
- [Hydra](http://www.hydra-cg.com/) as the API standard.
- [SQLAlchemy](http://www.sqlalchemy.org/) as the backend database connector for storage and related operations.

Apart from this, there are also various Python packages that hydrus uses. A list of all these packages can be found in the [requirements.txt](https://github.com/HTTP-APIs/hydrus/blob/master/requirements.txt) file. It would be advisable to run **`pip install -r requirements.txt`** before setting up other things.


**NOTE:** You'll need to use `python3` not `python2`.

<a name="demo"></a>
Demo
-------------
To run a demo for hydrus using the sample API, just do the following:

Clone hydrus:
```bash
git clone https://github.com/HTTP-APIs/hydrus
```
Change directory and switch to the develop branch:
```bash
cd hydrus

git checkout -b develop origin/develop
```

Install requirements and run the `main.py` script:
```bash
pip install -r requirements.txt

python main.py
```

The demo should be up and running on `http://localhost:8080/serverapi/`

<a name="usage"></a>
Usage
-------------
To understand how to use hydrus and how things work, head over to the [Usage](01-Usage.md) page of the wiki.

<a name="design"></a>
Design
-------------
Head over to the [Design](Design.md) page to understand the design principles and use cases of hydrus.
