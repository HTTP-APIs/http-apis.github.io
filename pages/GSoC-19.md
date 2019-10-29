---
layout: post
title: Ideas page for GSoC 2019 | Hydraecosystem.org
comments: true
permalink: /gsoc-19
---

# Introduction
Welcome to Hydra Ecosystem's ideas page for [GSoC 2019](https://summerofcode.withgoogle.com/). We would like to receive proposals that encompass different aspects of the development. Different tools are under development
and candidates can present projects to fulfill multiple ideas in this page and issues listed at our Github [organization page](https://github.com/HTTP-APIs/).

To get in touch with the Community:
* [Google Group](https://groups.google.com/d/forum/hydraecosystem)
* [Slack channel](https://join.slack.com/t/hydraecosystem/shared_invite/enQtNzM3NTg5NzQ2MDUxLWU1MjM3ZGRhZWM4ZTg1ODBjMTljNTQwNzAwMGM3ZDlmYTY3Y2E4OGJmN2NlZWRjMWIzY2MzN2NjOTIyYmQ1ZjU)

<div id="Ideas"></div>

# [Ideas for GSoC 2019](#Ideas)

We prepared an overview of the general objectives for this GSOC, you can read it in these [Github projects](https://github.com/orgs/HTTP-APIs/projects).

## 1. Work on the Hydra Agent
### Main Idea:
Currently, the client is a proof of concept and only implements GET requests. We need a full-fledged client that is in compliance with the Hydra Spec. We also need to make sure that the client syncs with the server to keep its data updated, this is not currently handled by the client. The client must also contain a battery of tests to ensure that a server is in compliance with the Spec or not.

**Skills Required**:
- Python
- Redis
- Hydra
- OpenCypher
- hydrus
- [Graph Algorithm](https://en.wikipedia.org/wiki/Category:Graph_algorithms)

**Difficulty Level** : *Intermediate/Hard*
    
**Issues**<br/>
Some issues are already open for this idea, please [check this list](https://github.com/HTTP-APIs/hydra-python-agent/issues?q=is%3Aissue+is%3Aopen+label%3AGSOC-2019):

## 2. General Improvements in hydrus.
### Main Idea:
There is always room from improvement in our flagship server, hydrus:
- implementation of a search mechanism (use of `hydra:search` and IRITemplates, and possibly Triple Pattern Fragments)
- updating the server according to the Hydra Spec. A lot of changes have been made to the spec from when hydrus was first developed.
- creation of dynamic endpoints. Users need to be able to define endpoints that have some functionality. Right now hydrus can only serve static data and users are unable to define the way in which incoming data is processed in a hydrus server.
- general improvements in code and optimizing the server functionality, refactoring.

**Skills Required**:
- Python
- Hydra
- hydrus
- Semantic Web
- Ability to write test suites
- Software Engineering

**Difficulty Level**: *Hard*

**Issues**<br/>
Some issues are already open for this idea, please [check this list](https://github.com/HTTP-APIs/hydrus/issues?q=is%3Aissue+is%3Aopen+label%3AGSOC-2019):

## 3. Improvement/Additions to the Parsers:
### Main Idea:
A lot of things haven't been implemented in the OpenAPI parser or did not have alternatives in Hydra. With the updations in the spec for both, there might be workarounds for this. We also would like to implement more such parsers and have a general collection of them to help people using different specs adopt Hydra easily. One such possibility is [RAML](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md/). More such API definition specs need to be identified and tools should be created for migration to Hydra.
    
**Skills Required**:
- Python
- Hydra
- hydrus
- REST

**Difficulty Level**: *Intermediate*

**Issues** <br/>
We are currently porting the Hydra-OpenAPI Parser to be a standalone library outside of hydrus' codebase, work in progress [here](https://github.com/HTTP-APIs/hydra-openapi-parser/pulls). The first tasks will be to complete the porting and then working on this repository. Other parsers to Hydra can be proposed.

## 4. Demonstration with Dynamic API paths
### Main Idea:
The objective is to create an API whose structure (paths to different kinds of data) is constantly changing, clients can still consume data by parsing the entry point vocabulary. Thanks to this it would be possible to use a Hydra client to discover the required paths for various kinds of data. This can be a great way to demonstrate the capabilities and use cases of HTTP-APIs and Hydra in general. We can have a UI showing the API structure in real-time and allow users to `POST/GET/PUT/DELETE` any type of data. We can also show how the client and API server interact with each other ( We had a lot of requests going on in the drone demo and it was very difficult to understand how things are working in the background). For example Suppose we have a Student class with basic properties like Name, Id, Class etc. Then the user can request for data say "Students with Id = 1*" without knowing anything about the API structure as it's dynamic. We can also demonstrate advanced querying features with this.

### Further Explanation
To understand why this is important and what we're trying to accomplish here, please play a little with the [Hydra Console](https://www.markus-lanthaler.com/hydra/console/) and [Flock Demo](https://github.com/HTTP-APIs/hydra-flock-drone/). One of the advantages of using a Hydra based server is that users don't need to hardcode API endpoints i.e clients can be generic in nature. The client can discover required endpoints by parsing the API Doc. In this idea, we want to demonstrate this capability as best as we can. We want this to be so clear that even a newbie can understand the benefits of using a hydra server just by playing with the demo a little. We tried something similar with the flock demo but there is too much information flow and that makes this hard to see without looking at the source code. Now there are several challenges involved with this idea like `How to change the API structure of a running server efficiently?`, `What will be the UI like?`, `Will the users be allowed to manually update the API structure or this will be handled autonomously?` and many more. All these questions are very open ended and you can get creative in proposing solutions.

**Skill Required**:
- Python
- hydrus
- Google Cloud services
- At least basic knowledge of DevOps
- HTML, CSS, JS
- Knowledge of any Javascript framework (ReactJS or VueJS or AngularJS)
- Hydra
- Ability to write test suites in Javascript

**Difficulty Level**: *Intermediate/Hard*

**NOTE:**<br/>
This is a high-profile demo implementation that requires infrastructural, backend and frontend skills. It implies working with the Organisation's cloud installation on Google Cloud.

## 5. A Demo API of a publicly available database.
### Main Idea:
We want to demonstrate usage by leveraging some publicly available/open sourced databases. Design a Hydra backend for it running in our GCloud installation. One example could be the [MusicBrainz](https://musicbrainz.org/) database. We can set up a pipeline that automatically downloads and publishes the data using hydrus. We will need to come up with use cases wherein a Hydra endpoint would be useful for the database as compared to a simple REST endpoint.

The full project implies:
* analyze the deploying scenario for the data
* research the specific domain to understand the data
* create a hydra documentation (RDF description) for the service
* develop and deploy the service in GCLOUD
    
**Skill Required**:
- Python
- Hydra
- hydrus
- Google Cloud services
- At least basic knowledge of DevOps
- Semantic Web
- Ability to write test suites

**Difficulty Level**: *Intermediate/Hard*

**NOTE**-<br/>
This is a high-profile demo implementation that will run in production, It requires infrastructural and backend. It implies working with the Organisation's cloud installation on Google Cloud.

## 6. Django port for hydrus.
### Main Idea:
hydrus is developed in Flask because the applications we had in mind were mostly related to IoT and sensors, so it was supposed to be lightweight and functional. But if we may want to look for more traditional applications and the wider public, we may like to have a [Django library](http://hirokiky.org/tech/create_django_library.html) that does have the same features as hydrus but works with Django. As Django has already a well-established REST library (Django-rest) it would be probably useful to extend it and create something like Django-rest-hydra, a library that let Django developers deploy hydra server in Django as now hydrus does with flask (starting from an API Documentation or an OpenAPI definition).
### Skill Required:
- Python
- Django
- hydrus
- Hydra
- Ability to write test suites in Django

**Difficulty Level**: *Intermediate*

----


# [How do I get started ?](#getting-started)
 Getting started is pretty easy. Head over to our [homepage](http://hydraecosystem.org/) or [community page](https://www.hydra-cg.com/). There are a lot of demos, presentations, and talks to get you up to speed. Then head over to the [hydrus repo](https://github.com/HTTP-APIs/hydrus) and clone it. Play with it a little, try to understand how the current implementation works, try to fix some bugs or report any issues you can find [here](https://github.com/HTTP-APIs/hydrus/issues).
Lastly, don't hesitate to reach out in the [Slack channel](https://join.slack.com/t/hydraecosystem/shared_invite/enQtNzM3NTg5NzQ2MDUxLWU1MjM3ZGRhZWM4ZTg1ODBjMTljNTQwNzAwMGM3ZDlmYTY3Y2E4OGJmN2NlZWRjMWIzY2MzN2NjOTIyYmQ1ZjU) if you have any question, we are very friendly people and we'll be more than happy to help you out.

As a general entry point to understand the repositories, there is our [Wiki](http://hydraecosystem.org/) and related links. Having a clear insight of [Resource Description Framework](https://goo.gl/TCdYG3) is quite necessary, Mentors will give full support to catch up with it.

## FAQ

- ## What is Google Summer of Code?
Google Summer of Code (GSoC) is a global program that matches students up with open source, free software, and technology-related organizations to write code and get paid to do it! The organizations provide mentors who act as guides through the entire process, from learning about the community to contributing code. The idea is to get students involved in and familiar with the open source community and help them to put their summer break to good use.

    You can read Google [Student Manual](https://developers.google.com/open-source/gsoc/resources/guide#student_manual) for more info.


- ## How to write a proposal?
Writing a good proposal can be a really challenging task. We have curated a list of helpful resources to help you get started.
    - [5 Tips to get your Google Summer of Code proposal accepted](http://people.csail.mit.edu/baghdadi/TXT_blog/5_advices_to_get_your_proposal_accepted.lyx.html)
    - [How to write a good GSoC proposal (Quora)?](https://www.quora.com/How-to-write-a-good-GSoC-proposal)
    - [How to write a kick-ass proposal for Google Summer of Code](http://teom.org/blog/kde/how-to-write-a-kick-ass-proposal-for-google-summer-of-code/)

    **Proposals can contain anything that can be valuable according to [GSoC guidelines for students](https://google.github.io/gsocguides/student/writing-a-proposal)**

- ## Proposal template
[Here](https://docs.google.com/document/d/1qPR02o6jY4uFBdCf3S0ous4LG32YCe6ZJuDGojXH2JY/edit)'s a proposal template for you to get started.

## Communication Channels
- [Slack](https://join.slack.com/t/hydraecosystem/shared_invite/enQtNzM3NTg5NzQ2MDUxLWU1MjM3ZGRhZWM4ZTg1ODBjMTljNTQwNzAwMGM3ZDlmYTY3Y2E4OGJmN2NlZWRjMWIzY2MzN2NjOTIyYmQ1ZjU)
- [W3C Group](https://www.w3.org/community/hydra/)
- [Mailing List](hydraecosystem@@googlegroups.com)
- Email
    - [Lorenzo Moriondo](mailto:tunedconsulting[AT]gmail[DOT]com)
    - [Akshay Dahiya](mailto:xadahiya[AT]gmail[DOT]com)
    - [Chris Andrew](mailto:chrisandrew119[AT]gmail[DOT]com)

## Potential Mentors
- Sandeep Chauhan



