---
layout: page
title: Tools | Hydraecosystem.org
permalink: /00-Home
---

# Generics

## Hydrus

**Hydrus** is a set of Python based tools for easier and efficient creation of Hypermedia driven REST-APIs. Hydrus utilizes the power of Linked Data to create a powerful REST APIs to serve data. Hydrus uses the Hydra(W3C) standard for creation and documentation of it’s APIs. It is a project created from scratch with minimal requirements, so that anyone can use it in their project without any difficulties. Lets's simplify things a bit and try to find what is hydrus and how does it work actually? So it's a python based library, which enables us to create (smart) APIs which can be interpreted by machines. And for that to happen we just need to supply hydrus a API doc (created with the help of Hydra vocabulary) to it. So now you might be wondering that how does it all actually happens? Let's clear the mist around it and discuss it's working. In order to leverage benefit of hydrus library apart from dependent python libraries we don't need much apart from an API doc. Actually hydrus exptects hydraDoc object, but when we pass a API Doc to it. It internally uses the Doc Maker tool create a HydraDoc object for it. After receiving hydraDoc object, hydrus parses the data into `Classes`, `Properties`, `Collections`. Which are then utilized to create smart APIs.  

Diagram shown below should make things more clear. 

<img src="https://gsocchrizandr.files.wordpress.com/2017/06/flo1.png"/>

Hydrus supports following features-
* A client that can understand Hydra vocabulary and interacts with a Hydra supporting server to basic CRUD operations on data.
* A generic server that can serve required data and metadata(in the form of API documentation) to a client over HTTP.
* A middleware that allows users to use the client to interact with the server using Natural Language which is processed machine consumable language. __(under development)__.

I hope this brief description must have given you a broad Idea of hydrus. If you wish to know more, I would definitely recommend you to try it yourself, Play with it. You can find codebase [here](https://github.com/HTTP-APIs/hydrus). And in case you want to use hydrus, then these [docs](https://hydrus.readthedocs.io/en/latest/hydrus.html#) should be quite helpful. Have fun!


## Hydra Python Agent

**Hydra python agent** is a smart Hydra client implemented in Python which can interact with hydrus and query data via basic CRUD operatrions. Reference implementation is [Heracles.ts](https://github.com/HydraCG/Heracles.ts). Smart clients are generic automated clients that establish resilient connected data networks leveraging knowledge graphs. Redis is used for data storage and data can be queried using OpenCypher. 

**Hydra python agent** is designed to:
* Provide a seamless Client that can be used to interact with Hydra based Smart APIs.
* Cache metadata from the Hydra server it connects to, hence allowing querying on the client-side.
* Maintain a syncrhonization mechanism which assures consistency of cached resources.

### Worth Knowing
 __Hydra Python Agent__ is not just limited to make basic CRUD requests, It comes with some more exciting functions which are responsible for processing Socket Events. Some of them are given below-
* `on_connect()`: Triggered when the Agent is successfully connected to the Server
* `on_disconnect()`: Triggered when the Agent is disconnected from the Server
* `on_update()`: Triggered when the agent receives an event named "update".
* `on_modification_table_diff()`: Used when client has to update multiple rows.
* `on_broadcast_event()`: Triggered when the agent recieves a "broadcast" event.

I am positive that this short description might not be enough to satisfy your curosity, You can explore the [codebase](https://github.com/HTTP-APIs/hydra-python-agent) in order to know more. In case the codebase is a bit complex, you may want to checkout [hyrda-python-agent-gui](https://github.com/HTTP-APIs/hydra-python-agent-gui). I am sure it would make things more clear.

**NOTE:** hydrus and Hydra Agent only supports Python 3.5 and above.

## Hydra OpenAPI Parser

It's a python based library which aids in parsing OpenAPI standard doc to Hydra compliant JSON-LD doc, so that the doc can be used by hydrus. As we already know hydrus expects an API doc built using hydra vocabulary. That's why we use Hydra OpenApi Parser to convert OpenAPI doc to Hydra doc for us, so that we can also use OpenAPI standard API Docs. You can find more about it [here](https://github.com/HTTP-APIs/hydra-openapi-parser).


## Hydra Python Core

It's a vital library that provides functions for implementation of Hydra Official Specification in Python. At the moment library consists of two modules namely `doc-writer` and `doc-maker`. They help hydrus in generalising a lot of things
* `doc-writer`: Helps to generate new documentation as well as a HydraDoc object. Which can be then used by hydrus.
* `doc-maker`:  Eventually,`doc-writer` proved to be too complex for users who wanted to use Hydrus. In order to get started they would have to learn how to write documentation using `doc-writer`. Which didn't seem good at that moment. So in order to deal with this problem we created `doc-maker` library which accepted Hydra API documentation and supplied hydrus with a HydraDoc object. Thus letting users use Hydra in an easy way while hiding all the complexities (introduced by `doc-writer` initially) from them. 

You can find codebase [here](https://github.com/HTTP-APIs/hydra-python-core).

<!-- ## Demo - Hydrus
It is advised to *use `docker-compose` to run the demo server*. See [README here](https://github.com/HTTP-APIs/hydrus/blob/master/README.md#start-up-the-demo).

Otherwise, to run a demo for hydrus using the sample API, do the following:

Clone Hydrus:
```bash
git clone https://github.com/HTTP-APIs/hydrus
```
Change directory and switch to the develop branch:
```bash
cd hydrus

git checkout -b develop origin/develop
```

Install hydrus using:
```bash
pip install .
```
or
```bash
python setup.py install
```

and run the server using:

```bash
hydrus serve
```

The demo should be up and running on `http://localhost:8080/serverapi/`.

<a name="workflow"></a>
For a generic overview of the Development workflow, head over to [Workflow](/Workflow) page.

<a name="usage"></a>
Head over to the [Usage](/01-Usage) page of the wiki to understand how hydrus works and how to use it. 

<a name="design"></a>
Head over to the [Design](/Design) page to understand the design principles and use cases of hydrus. -->

---


