---
layout: page
title: Ideas page for GSoC 2019 | Hydraecosystem.org
permalink: /gsoc-19
---


# Ideas for GSoC 2019
----

## Work on the Hydra Client
### Idea:
Currently the client is a proof of concept and only implements GET requests. We need a full fledged client that is in compliance with the spec. We also need to make sure that the client syncs with the server to keep it's data updated. This is not currently handled by the client. The client must also contain a battery of tests to ensure that a server is in compliance with the spec or not.
### Skill Required:
- Python
- Redis
- Hydra
- OpenCypher
- Hydrus
### Difficulty Level : Intermediate

## Django port for hydrus.
### Idea:
Hydrus is developed in Flask because the applications we had in mind were mostly related to IoT and sensors, so it was supposed to be lightweight and functional. But if we may want to look for more traditional applications and the wider public, we may like to have a Django library ( http://hirokiky.org/tech/create_django_library.html ) that does have the same features as hydrus but works with Django. As Django has already a well-established REST library (Django-rest) it would be probably useful to extend it and create something like Django-rest-hydra, a library that let Django developers deploy hydra server in Django as now hydrus does with flask (starting from an API Documentation or an OpenAPI definition).
### Skill Required:
- Python
- Django
- Hydrus
- Hydra
- Ability to write test suites
### Difficulty Level : Intermediate

## Demonstration with Dynamic API paths
### Idea:
If we can create an API whose structure(paths to different kinds of data) is constantly changing only the vocab path stays same. Then we can use a Hydra client to discover the required paths for various kinds of data. This can be a great way to demonstrate the capabilities and use cases of HTTP-APIs and Hydra in general. We can have a UI showing the API structure in real-time and allow users to POST/GET/PUT/DELETE any type of data. We can also show how the client and API server interact with each other ( We had a lot of requests going on in the drone demo and it was very difficult to understand how things are working in the background). For example Suppose we have a Student class with basic properties like Name, Id, Class etc. Then the user can request for data say "Students with Id = 1*" without knowing anything about the API structure as it's dynamic. We can also demonstrate advanced querying features with this.
### Skill Required:
SkillsRequired :
- Python
- Hydrus
- At least basic knowledge of DevOps
- HTML, CSS, JS
- Knowledge of any Javascript framework is a plus ( React Js or Vue Js)
- Hydra
- Ability to write test suites
### Difficulty Level : Intermediate/Hard

## A Demo API of a publicly available database.
### Idea:
We can use some publicly available/open sourced databases that are online and used by a lot of people and design a Hydra endpoint for it. One example could be the MusicBrainz database. We can setup an endpoint that can be consumed by a Hydra enablIf we ed client to consume data. We will need to come up with use cases wherein a Hydra endpoint would be useful for the database as compared to a simple REST endpoint.
### Skill Required:
- Python
- Hydra
- Hydrus
- Semantic Web
- Ability to write test suites
### Difficulty Level : Intermediate/Hard

## General Improvements in hydrus.
### Idea:
There are a few things that need to be updated in hydrus:
- The implentation of a search mechanism(possibly the use of hydra:search)
- Updating the server according to the spec. A lot of changes have been made to the spec from when hydrus was first developed. Most of the functionality in hydrus hasn't been updated in two years.
- Creation of dynamic endpoints. Users need to be able to define endpoints that have some functionality. Right now hydrus can only serve static data and users are unable to define the way in which incoming data is processed in a hydrus server.
- General improvements in code and optimising the server functionality.
### Skills Required:
- Python
- Hydra
- Hydrus
- Semantic Web
- Ability to write test suites
- Software Engineering
### Difficulty Level: Hard


## Improvement/Additions to the parsers:
### Idea:
A lot of things haven't been implemented in the OpenAPI parser or did not have alternatives in Hydra. With the updations in the spec for both, there might be workarounds for this. We also would like to implement more such parsers and have a general collection of them to help people using different specs adopt Hydra easily. One such possiblity is [RAML](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/). More such API definition specs need to be identified and tools should be created for migration to Hydra.
### Skills Required:
- Python
- Hydra
- Hydrus
- REST
### Difficulty Level: Intermediate
