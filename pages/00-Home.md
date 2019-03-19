---
layout: page
title: Foundationsm | Hydraecosystem.org
permalink: /00-Home
---

# Foundations

## Generics
Beside all the other tools in the ecosystem, **hydrus** (lowercase) is the basic module from which API designers/engineers/developers can build up their own automated infrastructure that leverages smart clients. hydrus is the server-side tool that allows REST data to be published as Hydra-aware data. An **Hydra network** is made up of one or more hydrus instances that can receive requests from **Hydra smart clients** (or agents, see [`hydra-python-agent`](https://github.com/HTTP-APIs/hydra-python-agent) repository). The interaction of hydrus and Hydra smart clients is how Hydra ecosystem realizes the Client-Server pattern.

hydrus provides a full-stack architecture that makes it the basic building block for a machine that is a node in a wider network of Web APIs. Generic components of the network are:
* on hydrus, a REST interface
* on hydrus, a Hydra-powered server, with the possibilities of being self-deployable and accepting on-the-fly configuration changes
* on the smart client, a Hydra-powered generic client, a generic client that can connect to any Hydra-based APIs without hard-coding its behaviour

### RDF and Linked Data
Hydra is an extension of W3C's Resource Description Framework. RDF is widely known as the technology which makes possible the [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) by allowing the representation of data as [Linked Data](https://en.wikipedia.org/wiki/Linked_data).
[RDF is a W3C standard](https://www.w3.org/RDF/) that allows the representation of Knowledge in specific Domain as Knowledge Graphs. Quanta of information are represented as "triples": statements that relate a subject to an object by a predicate. Triples can be stored in different formats, the format used in Hydra and hydrus is [JSON-LD](https://json-ld.org/).
For a little more detailed explanation of triples you can [read this document](http://www.hydra-cg.com/spec/latest/linked-data-fragments/#interfaces-to-linked-data).

### Hydra
Hydra is a framework to enable REST APIs to be described semantically using RDF. It is based on JSON-LD and proposed as [W3C draft](https://www.hydra-cg.com/spec/latest/core/).


**hydrus** (lowercase) is the flagship server in the ecosystem. It is a Flask server meant to build and deploy Hydra-based Web APIs in a straightforward and effective way. It uses Docker as virtualization and isolation technology (see Usage). Other tools, as dedicated clients for testing, instances running with others frameworks, parsers/translators to other standards, are in the same ecosystem.

hydrus is a set of **Python** based tools for easier and efficient creation of hypermedia-driven REST APIs. hydrus utilises the power of [Linked Data](https://en.wikipedia.org/wiki/Linked_data) to create a powerful REST server to serve data.
hydrus uses the [Hydra(W3C)](http://www.hydra-cg.com/) standard-to-be for creation and documentation of data servers.


**Hydra smart client** (`hydra-python-agent`) is a Python implementation of a client based on the Hydra Community Group specifications and reference implementation [Heracles.ts](https://github.com/HydraCG/Heracles.ts). It can navigate a network of hydrus servers autonomously by reading their API documentation. It is a generic client in the sense that can query and retrieve data from any, Hydra-aware or not, server (like hydrus or any other Web server around).

### What makes the difference

How does Hydra compare to other API documentation standards? Hydra is generally better rooted than other projects (i.e. OpenAPI) as it leverages the experience of now thirty-years-old Linked Data ecosystem. This makes Hydra:
* a 100% Semantic Web tool as requested by W3C; 
* directly interoperable with any existing RDF/OWL repository ([have a look](https://en.wikipedia.org/wiki/Linked_data#Linking_Open_Data_community_project));
* easily parsable into less fluent API documentation standards. As RDF is, by design and nature, semantically highly descriptive, it is much easier to parse documents into a less rich standard flawlessly. While the opposite, parsing for example an OpenAPI document to make its API interoperable with existing Semantic repositories, can take a lot of time.

These points add up to all the advantages mentioned in previous paragraphs. Finally, Linked Data is, by [Berners-Lee's design](https://www.w3.org/wiki/LinkedData), the tool to distribute data on the Web; Hydra adheres to this path of evolution to keep the Web open as wished by its creators and developers during the last decades. 

Table of contents
-------------
* [Features](#features)
* [Requirements](#req)
* [Demo](#demo)
* [Workflow](#workflow)
* [Usage](#usage)
* [Design](#design)

<a name="features"></a>
Features
-------------
Every **hydrus instance** provides the following tools:
- A generic server that can serve required data and metadata (in the form of API documentation) to a client over HTTP.
- A Web interface that allows users to use the client to interact with the server/infrastructure using Natural Language which is processed machine consumable language. **(under developement)**

Every **Hydra smart client** instance provides:
- A client that can understand Hydra vocabulary and interact autonomously with a Hydra supporting server via basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on data. The contributors are actively developing a fork of `hydra-py` for the sake of creating a generic [Hydra Agent](https://github.com/HTTP-APIs/hydra-python-agent). 

<a name="req"></a>
Requirements
-------------
The hydrus system is built over the following standards and tools:
- [Flask](http://flask.pocoo.org/) a Python based micro-framework for handling server requests and responses.
- [JSON-LD](http://json-ld.org/spec/latest/json-ld/) as the prefered data format.
- [Hydra](http://www.hydra-cg.com/) as the API standard.
- [SQLAlchemy](http://www.sqlalchemy.org/) as the backend database ORM for storage and querying operations.

Apart from these, there are also various Python packages that hydrus leverages. A list of all these packages can be found in the [requirements.txt](https://github.com/HTTP-APIs/hydrus/blob/master/requirements.txt) file.

The Hydra agent is a fork and rebuilding of [hydra-py](https://github.com/pchampin/hydra-py), under development [here](https://github.com/HTTP-APIs/hydra-python-agent).

**NOTE:** hydrus and Hydra Agent supports only Python 3.5 and above

<a name="demo"></a>
Demo
-------------
It is advised to *use `docker-compose` to run the demo server*. See [README here](https://github.com/HTTP-APIs/hydrus/blob/master/README.md#start-up-the-demo).

Otherwise you can try to run a demo for hydrus using the sample API, just do the following:

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

The demo should be up and running on `http://localhost:8080/serverapi/`.

<a name="workflow"></a>
Workflow
-------------
For a generic overview of the Development workflow, head over to [Workflow](/Workflow) page.

<a name="usage"></a>
Usage
-------------
To understand how to use hydrus and how things work, head over to the [Usage](/01-Usage) page of the wiki.

<a name="design"></a>
Design
-------------
Head over to the [Design](/Design) page to understand the design principles and use cases of hydrus.

---


