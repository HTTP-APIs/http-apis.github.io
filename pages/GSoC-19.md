---
layout: page
title: Ideas page for GSoC 2019 | Hydraecosystem.org
permalink: /gsoc-19
---

# Ideas for GSoC 2019
----

We would like to receive proposals that encompass different aspects of the development. Different tools are under development
and candidates can present projects to fulfill multiple ideas in this page, plus proposals can contain anything that can be valuable according to [GSoC guidelines for students](https://google.github.io/gsocguides/student/writing-a-proposal).

## Work on the Hydra Agent
### Idea:
Currently, the client is a proof of concept and only implements GET requests. We need a full-fledged client that is in compliance with the Hydra Spec. We also need to make sure that the client syncs with the server to keep its data updated, this is not currently handled by the client. The client must also contain a battery of tests to ensure that a server is in compliance with the Spec or not.
### Skill Required:
- Python
- Redis
- Hydra
- OpenCypher
- hydrus
- [Graph Algorithms](https://en.wikipedia.org/wiki/Category:Graph_algorithms)

**Difficulty Level** : *Intermediate/Hard*

### Issues
Some issues are already open for this idea, please [check this list](https://github.com/HTTP-APIs/python-hydra-agent/issues?q=is%3Aissue+is%3Aopen+label%3AGSOC-2019):

## General Improvements in hydrus.
### Idea:
There is always room from improvement in our flagship server, hydrus:
- implementation of a search mechanism (use of `hydra:search` and IRITmeplates, and possibly Triple Pattern Fragments)
- updating the server according to the Hydra Spec. A lot of changes have been made to the spec from when hydrus was first developed.
- creation of dynamic endpoints. Users need to be able to define endpoints that have some functionality. Right now hydrus can only serve static data and users are unable to define the way in which incoming data is processed in a hydrus server.
- general improvements in code and optimizing the server functionality, refactoring.
### Skills Required:
- Python
- Hydra
- hydrus
- Semantic Web
- Ability to write test suites
- Software Engineering

**Difficulty Level**: *Hard*

### Issues
Some issues are already open for this idea, please [check this list](https://github.com/HTTP-APIs/hydrus/issues?q=is%3Aissue+is%3Aopen+label%3AGSOC-2019):

## Improvement/Additions to the parsers:
### Idea:
A lot of things haven't been implemented in the OpenAPI parser or did not have alternatives in Hydra. With the updations in the spec for both, there might be workarounds for this. We also would like to implement more such parsers and have a general collection of them to help people using different specs adopt Hydra easily. One such possibility is [RAML](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/). More such API definition specs need to be identified and tools should be created for migration to Hydra.
### Skills Required:
- Python
- Hydra
- hydrus
- REST

**Difficulty Level**: *Intermediate*

### Issues
We are currently porting the Hydra-OpenAPI Parser to be a standalone library outside of hydrus' codebase, work in progress [here](https://github.com/HTTP-APIs/hydra-openapi-parser/pulls). The first tasks will be to complete the porting and then working on this repository. Other parsers to Hydra can be proposed.

## Demonstration with Dynamic API paths
### Idea:
The objective is to create an API whose structure (paths to different kinds of data) is constantly changing, clients can still consume data by parsing the entry point vocabulary. Thanks to this it would be possible to use a Hydra client to discover the required paths for various kinds of data. This can be a great way to demonstrate the capabilities and use cases of HTTP-APIs and Hydra in general. We can have a UI showing the API structure in real-time and allow users to POST/GET/PUT/DELETE any type of data. We can also show how the client and API server interact with each other ( We had a lot of requests going on in the drone demo and it was very difficult to understand how things are working in the background). For example Suppose we have a Student class with basic properties like Name, Id, Class etc. Then the user can request for data say "Students with Id = 1*" without knowing anything about the API structure as it's dynamic. We can also demonstrate advanced querying features with this.
### Skill Required:
- Python
- hydrus
- Google Cloud services
- At least basic knowledge of DevOps
- HTML, CSS, JS
- Knowledge of any Javascript framework (ReactJS or VueJS or AngularJS)
- Hydra
- Ability to write test suites in Javascript

**Difficulty Level**: *Intermediate/Hard*

### Issues
This is a high-profile demo implementation that requires infrastructural, backend and frontend skills. It implies working with the Organisation's cloud installation on Google Cloud.

## A Demo API of a publicly available database.
### Idea:
We want to demonstrate usage by leveraging some publicly available/open sourced databases. Design a Hydra backend for it running in our GCloud installation. One example could be the [MusicBrainz](https://musicbrainz.org/) database. We can set up a pipeline that automatically downloads and publishes the data using hydrus. We will need to come up with use cases wherein a Hydra endpoint would be useful for the database as compared to a simple REST endpoint.
### Skill Required:
- Python
- Hydra
- hydrus
- Google Cloud services
- At least basic knowledge of DevOps
- Semantic Web
- Ability to write test suites

**Difficulty Level**: *Intermediate/Hard*

### Issues
This is a high-profile demo implementation that will run in production, It requires infrastructural and backend. It implies working with the Organisation's cloud installation on Google Cloud.

## Django port for hydrus.
### Idea:
hydrus is developed in Flask because the applications we had in mind were mostly related to IoT and sensors, so it was supposed to be lightweight and functional. But if we may want to look for more traditional applications and the wider public, we may like to have a [Django library](http://hirokiky.org/tech/create_django_library.html) that does have the same features as hydrus but works with Django. As Django has already a well-established REST library (Django-rest) it would be probably useful to extend it and create something like Django-rest-hydra, a library that let Django developers deploy hydra server in Django as now hydrus does with flask (starting from an API Documentation or an OpenAPI definition).
### Skill Required:
- Python
- Django
- hydrus
- Hydra
- Ability to write test suites in Django

**Difficulty Level**: *Intermediate*