---
layout: page
title: Tools | Hydraecosystem.org
permalink: /hydra-ecosystem-tools
---

# Generics

## Hydrus

**Hydrus** is a generic server stack that is used for easier and efficient creation of Hypermedia driven REST-APIs with the use of Hydra. Hydrus utilizes the power of Linked Data to create powerful REST APIs to serve data. Hydrus uses the Hydra(W3C) standard for creation and documentation of it’s APIs. It is a project created from scratch with minimal requirements so that anyone can use it in their project without any difficulties. Hydra is basically a python based library, which enables us to create (smart) APIs which can be interpreted by machines. In order to leverage the benefit of Hydrus library apart from dependent python libraries, we don't need much apart from an API doc. Actually Hydrus expects hydraDoc object, but when we pass an API Doc to it. It internally uses the Doc Maker tool to create a HydraDoc object for it. After receiving hydraDoc object, Hydrus parses the data into `Classes`, `Properties`, `Collections`. Which are then utilized to create smart APIs.  

Diagram shown below should make things more clear. 

<img src="https://gsocchrizandr.files.wordpress.com/2017/06/flo1.png"/>

Hydrus supports following features-
* A client that can understand Hydra vocabulary and interacts with a Hydra supporting server to basic CRUD operations on data.
* A generic server that can serve required data and metadata(in the form of API documentation) to a client over HTTP.
* A middleware that allows users to use the client to interact with the server using Natural Language which is processed machine consumable language. __(under development)__.

This brief description of Hydrus must have provided a broad Idea of Hydrus. To know more, visit this [link](/hydrus). It is recommended to imagine use cases where it can be beneficial and try it own your own. You can read [Hydrus - Beginner's Guide](/getting-started-with-hydrus) in order to get started and you can find codebase [here](https://github.com/HTTP-APIs/hydrus).

## Hydra Python Agent

**Hydra python agent** is a smart Hydra client implemented in Python which can interact with hydrus and query data via basic CRUD operatrions. Reference implementation is [Heracles.ts](https://github.com/HydraCG/Heracles.ts). Smart clients are generic automated clients that establish resilient connected data networks leveraging knowledge graphs. Redis is used for data storage and data can be queried using OpenCypher. 

**Hydra python agent** is designed to:
* Provide a seamless Client that can be used to interact with Hydra based Smart APIs.
* Cache metadata from the Hydra server it connects to, hence allowing querying on the client-side.
* Maintain a synchronization mechanism that assures consistency of cached resources.

### Worth Knowing
 __Hydra Python Agent__ is not just limited to make basic CRUD requests, It comes with some more exciting functions which are responsible for processing Socket Events. Some of them are given below-
* `on_connect()`: Triggered when the Agent is successfully connected to the Server
* `on_disconnect()`: Triggered when the Agent is disconnected from the Server
* `on_update()`: Triggered when the agent receives an event named "update".
* `on_modification_table_diff()`: Used when client has to update multiple rows.
* `on_broadcast_event()`: Triggered when the agent recieves a "broadcast" event.

Tou know more, visit [Hydra Python Agent](/hydra-python-agent) and codebase can be found [here](https://github.com/HTTP-APIs/hydra-python-agent). In case the codebase is a bit complex, a look at [hyrda-python-agent-gui](https://github.com/HTTP-APIs/hydra-python-agent-gui) might improve understanding.

**NOTE:** hydrus and Hydra Agent only supports Python 3.5 and above.

## Hydra OpenAPI Parser

It's a python based library which aids in parsing OpenAPI standard doc to Hydra compliant JSON-LD doc so that the doc can be used by Hydrus. As we already know Hydrus expects an API doc built using hydra vocabulary. That's why we use Hydra OpenApi Parser to convert OpenAPI doc to Hydra doc for us so that we can also use OpenAPI standard API Docs. 
Know more about it [here](https://github.com/HTTP-APIs/hydra-openapi-parser).


## Hydra Python Core

It's a vital library that provides functions for the implementation of Hydra Official Specification in Python. At the moment the library consists of two modules namely `doc-writer` and `doc-maker`. They help Hydrus in generalizing a lot of things
* `doc-writer`: Helps to generate new documentation as well as a HydraDoc object. Which can be then used by Hydrus.
* `doc-maker`:  Eventually, `doc-writer` proved to be too complex for users who wanted to use Hydrus. To get started they would have to learn how to write documentation using `doc-writer`. Which didn't seem good at that moment. So to deal with this problem `doc-maker` library was created which accepted Hydra API documentation and supplied Hydrus with a `HydraDoc` object. Thus letting users easily use Hydra while hiding all the complexities (introduced by `doc-writer` initially) from them. 

It's codebase is available [here](https://github.com/HTTP-APIs/hydra-python-core).


