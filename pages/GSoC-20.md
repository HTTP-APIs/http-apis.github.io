---
layout: page
title: Ideas page for GSoC 2020 | Hydraecosystem.org
comments: true
permalink: /gsoc-20
---

# Introduction
Welcome to Hydra Ecosystem's ideas page for [GSoC 2020](https://summerofcode.withgoogle.com/). We would like to receive proposals that encompass different aspects of the development. Different tools are under development
and candidates can present projects to fulfill multiple ideas on this page and issues listed at our Github [organization page](https://github.com/HTTP-APIs/).

To get in touch with the Community:
* [Slack](https://join.slack.com/t/hydraecosystem/shared_invite/enQtNzM3NTg5NzQ2MDUxLWU1MjM3ZGRhZWM4ZTg1ODBjMTljNTQwNzAwMGM3ZDlmYTY3Y2E4OGJmN2NlZWRjMWIzY2MzN2NjOTIyYmQ1ZjU)

## Application Instructions
- Students wanting to apply to the org must familarise themselves with the Github workflow.
- Working on open issues is the best way for your skill to be recognised.
- It is a good practice to search the history of issues for similar problems before creating a new issue on GitHub, this will avoid the creation of duplicated issues.
- Try running our tools and going through the demos to get a better understanding of how things work.
- Hang around on the Slack channel and talk to people about any problems or issues.
- Make sure that any issue your create is verified before beginning to work on it.
- Use the provided [template](https://docs.google.com/document/d/1qPR02o6jY4uFBdCf3S0ous4LG32YCe6ZJuDGojXH2JY/edit?usp=sharing) for writing your proposals.
- Discuss your ideas with the mentors and get your proposals reviewed before submitting. [Note: Due to the large number of proposals we receive, we only review a proposal once per student, so make it count.]
- A list of prerequisites and concepts needed to understand Hydra and the tools developed by Hydra Ecosystem can be found [here](https://www.hydraecosystem.org/Starting-Material).
- If you have any doubts, ask questions in our super friendly Slack community. We'll try our best to answer all your questions.

<div id="Ideas"></div>

# [Ideas for GSoC 2020](#Ideas)

## 1. Make hydrus Future proof
### Main Idea:
Improve scalability of the database by deploying a hydrus instance for every <em>HydraClass</em> and then allowing linking by reference.
The parser should call for the deployment of a hydrus instance for each class in the APIDoc, predicates between classes should be represented as links; by consequence, the agent should build its own representation by dereferencing the links.

**Skills Required**:
- Python
- Hydra
- Agent
- Parser
- hydrus
- Semantic Web
- Ability to write test suites
- Software Engineering

**Difficulty Level**: *Hard*

**NOTE**: This is a sophisticated project and will require a significant understanding of various HydraEcosystem tools including hydrus, parser, and the agent. We understand there's a lot to be done here, so, we'll try to pair 2-3 students to complete the overall task providing students an opportunity to learn how to work in distributed teams.

## 2. General Improvements in hydrus.
### Main Idea:
There is always room from improvement in our flagship server, hydrus:
- Implementation of a search mechanism (use of `hydra:search` and IRITemplates, and possibly Triple Pattern Fragments)
- Updating the server according to the Hydra Spec. A lot of changes have been made to the spec from when hydrus was first developed.
- Creation of dynamic endpoints. Users need to be able to define endpoints that have some functionality. Right now hydrus can only serve static data and users are unable to define how incoming data is processed in a hydrus server.
- General improvements in code and optimizing the server functionality, refactoring.
- Keep up with the development of the querying system for the agent
- Creating a Youtube channel with developers walkthrough to deploying hydrus and also using the agent GUI, demo walk-through [here](https://www.youtube.com/watch?v=J1YO5IGaTlQ)
- Add to Youtube channel short presentations to introduce graphs Linked Data and RDF
- Measure the performance of the current implementation and improve security aspects and test coverage.
- **bonus**: Anything suggested by students and approved by the mentors


**Skills Required**:
- Python
- Hydra
- hydrus
- Semantic Web
- Ability to write test suites
- Software Engineering

**Difficulty Level**: *Intermediate*

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
We are currently porting the Hydra-OpenAPI Parser to be a standalone library outside of hydrus' codebase, work in progress [here](https://github.com/HTTP-APIs/hydra-openapi-parser/pulls). The first task will be to complete the porting and then working on this repository. Other parsers to Hydra can be proposed.

## 4. Demonstration with Dynamic API paths
### Main Idea:
The objective is to create an API whose structure (paths to different kinds of data) is constantly changing, clients can still consume data by parsing the entry point vocabulary. Thanks to this it would be possible to use a Hydra client to discover the required paths for various kinds of data. This can be a great way to demonstrate the capabilities and use cases of HTTP-APIs and Hydra in general. We can have a UI showing the API structure in real-time and allow users to `POST/GET/PUT/DELETE` any type of data. We can also show how the client and API server interact with each other ( We had a lot of requests going on in the drone demo and it was very difficult to understand how things are working in the background). For example Suppose we have a Student class with basic properties like Name, Id, Class, etc. Then the user can request for data say "Students with Id = 1*" without knowing anything about the API structure as it's dynamic. We can also demonstrate advanced querying features with this.

### Further Explanation
To understand why this is important and what we're trying to accomplish here, please play a little with the [Hydra Console](https://www.markus-lanthaler.com/hydra/console/) and [Flock Demo](https://github.com/HTTP-APIs/hydra-flock-drone/). One of the advantages of using a Hydra based server is that users don't need to hardcode API endpoints i.e clients can be generic in nature. The client can discover the required endpoints by parsing the API Doc. In this idea, we want to demonstrate this capability as best as we can. We want this to be so clear that even a newbie can understand the benefits of using a hydra server just by playing with the demo a little. We tried something similar with the flock demo but there is too much information flow and that makes this hard to see without looking at the source code. Now there are several challenges involved with this idea like `How to change the API structure of a running server efficiently?`, `What will be the UI like?`, `Will the users be allowed to manually update the API structure or this will be handled autonomously?` and many more. All these questions are very open-ended and you can get creative in proposing solutions.

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
We want to demonstrate usage by leveraging some publicly available/open-sourced databases. Design a Hydra backend for it running in our GCloud installation. One example could be the [MusicBrainz](https://musicbrainz.org/) database. We can set up a pipeline that automatically downloads and publishes the data using hydrus. We will need to come up with use cases wherein a Hydra endpoint would be useful for the database as compared to a simple REST endpoint.

The full project implies:
* Analyze the deployment scenario for the data
* Research the specific domain to understand the data
* Create hydra documentation (RDF description) for the service
* Develop and deploy the service in GCLOUD
    
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


## 6. Get Creative
We encourage creativity a lot and understand it is very important for you to work on the things you're really interested in. If you want, you can choose subparts from the ideas listed above or even come up with your own (discussing new ideas with mentors first is highly encouraged) to create the proposal best suited to your interests.

### Skills Required:
- A TON OF CREATIVITY

----


# [How do I get started ?](#getting-started)
 Getting started is pretty easy. Head over to our [homepage](http://hydraecosystem.org/) or [community page](https://www.hydra-cg.com/). There are a lot of demos, presentations, and talks to get you up to speed. Then head over to the [hydrus repo](https://github.com/HTTP-APIs/hydrus) and clone it. Play with it a little, try to understand how the current implementation works, try to fix some bugs or report any issues you can find [here](https://github.com/HTTP-APIs/hydrus/issues).
Lastly, don't hesitate to reach out in the [Slack community](https://join.slack.com/t/hydraecosystem/shared_invite/enQtNzM3NTg5NzQ2MDUxLWU1MjM3ZGRhZWM4ZTg1ODBjMTljNTQwNzAwMGM3ZDlmYTY3Y2E4OGJmN2NlZWRjMWIzY2MzN2NjOTIyYmQ1ZjU) if you have any question, we are very friendly people and we'll be more than happy to help you out.

As a general entry point to understand the repositories, there is our [Wiki](http://hydraecosystem.org/) and related links. Having a clear insight of [Resource Description Framework](https://goo.gl/TCdYG3) is quite necessary, Mentors will give full support to catch up with it.

## FAQ

- ## What is Google Summer of Code?
Google Summer of Code (GSoC) is a global program that matches students up with open-source, free software, and technology-related organizations to write code and get paid to do it! The organizations provide mentors who act as guides through the entire process, from learning about the community to contributing code. The idea is to get students involved in and familiar with the open-source community and help them to put their summer break to good use.

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
- [Gitter](https://gitter.im/HTTP-APIs/Lobby) [Archived]
- [W3C Group](https://www.w3.org/community/hydra/)
- [Slack](https://hydraecosystem.slack.com)
- Email
    - [Lorenzo Moriondo](mailto:tunedconsulting[AT]gmail[DOT]com)
    - [Akshay Dahiya](mailto:xadahiya[AT]gmail[DOT]com)
    - [Chris Andrew](mailto:chrisandrew119[AT]gmail[DOT]com)

## Potential Mentors
- TBD
