---
layout: page
title: Ideas page for GSoC 2021 | Hydraecosystem.org
comments: true
permalink: /gsoc-21
---

# Introduction
Welcome to Hydra Ecosystem's ideas page for [GSoC 2021](https://summerofcode.withgoogle.com/). We would like to receive proposals that encompass different aspects of the development. Different tools are under development
and candidates can present projects to fulfill multiple ideas on this page and issues listed at our Github [organization page](https://github.com/HTTP-APIs/).

To get in touch with the Community:
* [Slack](https://join.slack.com/t/hydraecosystem/shared_invite/zt-ly4j3hg3-gVhJxgc6ykpGrel_N4Xvvg)

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

# [Ideas for GSoC 2021](#Ideas)

## 1. Build a banking service with Open Risk and Hydra: prototype with hydrus and the agent
### Key points
The Hydra Ecosystem / [Open Risk](https://www.openriskmanagement.com/) project proposal for GSOC2021 aims to guide students to build *a basic REST service as the backend for a hypothetical banking service*. The use case is a small bank, peer-to-peer lender or asset manager holding a portfolio of loans. One or more databases contain data about borrowers, loans, credit risk assessments and other relevant information describing the portfolio. **The technical objective is to create a modern API that will allow other parties (investors, rating agencies, regulators etc.) to gain access to some facets of the portfolio data**, e.g., for due-diligence, valuation or other risk management purposes.

### Objectives
The project will provide Hydra Ecosystem community with:
* useful architectural/engineering feedback and a working example to show functionalities and capabilities
* a demo-reference for developers to learn and work on
* general improvements and features implementations for the client/server (hydrus/agent) network system 
* a cloud-deployed use-case and example

The project will provide [Open Risk](https://www.openriskmanagement.com/) community with:
* disseminate useful financial knowledge among developers interested in the subject
* a work-on example and use case to showcase tools, technologies and functionalities
* feedback from software developers about community's tools

### Skills Required
- Python
- Hydra
- Semantic Web
- Web APIs, REST paradigm
- Software Engineering
- Google Cloud
- Basics understanding of and interest in financial business processes (lending, financial markets, etc.): domain-specific support about banking will be provided by dedicated mentor (see Appendix below for further material)

### Workflow
A template workflow and requirements will be presented to the student to work out and develop the solution. The project is intended to be a simulation of an Agile/LEAN enviroment to allow the student to grow along with the prototype. Here a partial list of tasks that the student will be introduced to:
#### Semantic Web
* Create a RDF vocabulary to describe a fairly realistic(*) bank loan portfolio: e.g. classes Customer, Account, Deposit, Withdrawal, Transfer, LoanContract, etc.
* Make templates ([EBA Loan Templates @ Open Risk Manual](https://www.openriskmanual.org/wiki/EBA_NPL_Template)) into RDF representation
* How to connect the service to an existing [RDF vocabulary (Open Risk)](https://github.com/open-risk/open_risk_taxonomy)
* Cloud and REST API design

#### Create the service with Hydra
* Deploy to Google Cloud (GCP)
* Test and iterate with the community
* Add features to existing Hydra server/client tools to fulfill Project Requirements 
* Advanced features (Optional): use Hydra to create endpoints to compare interest rates or other fields in a contract. Create other filtering/querying endpoint for which the need arises during the Summer

#### Training
* Create a video-tutorial of 5 minutes for Hydra Ecosystem's Youtube channel with subject "APIs for Fintech: How To Deploy A Simple Banking Service with Hydra"


(*) Using the European Banking Authority or ESMA Loan Level Templates as a basis means the service will be on a path towards production readiness. These templates are very detailed but we can focus on some essential parts



## 2. General Improvements in [hydrus](https://github.com/HTTP-APIs/hydrus).
### Key points
There is always room from improvement in our flagship server, hydrus:
- Updating the server according to the Hydra Spec.
- Creation of dynamic endpoints. Users need to be able to define endpoints that have some functionality. Right now hydrus can only serve static data and users are unable to define how incoming data is processed in a hydrus server.
- General improvements in code and optimizing the server functionality, refactoring.
- Keep up with the development of the querying system for the agent
- Implement Update operation(POST) on collections. Refer to [this](https://github.com/HTTP-APIs/hydrus/issues/494) issue for more details.
- Add more robust security features to hydrus.

### Skills Required
- Python
- Hydra
- Semantic Web
- Ability to write test suites
- Software Engineering

**Difficulty Level**: *Intermediate*

**Issues**<br/>
Some issues are already open for these, please check [issues](https://github.com/HTTP-APIs/hydrus/issues).


## 3. General Improvements in [agent](https://github.com/HTTP-APIs/hydra-python-agent).
### Key points
The agent is a super cool way to interact with a hydra server, but there is lot of room for improvement. Some parts of this project can be:
- Improving the UI/UX of the agent
- Add graph interaction events/actions support
- Making the agent more responsive
- Generalising the agent so that it works with any hydra enabled API, right now the agent is strongly tied up with hydrus
- Optimise the graph storage and search mechanism in the client
- Bring on par hydrus and hydra-python-agent
- Display object instances in the graph too realtime
- Deploy with docker container so that other people can use it on the web without having to install it locally

### Skills Required
- Python
- Hydra
- ReactJS
- Javascript
- Redis

**Difficulty Level**: *Intermediate*

**Issues**<br/>
Some issues are already open for these, please check [issues](https://github.com/HTTP-APIs/hydra-python-agent-gui/issues).

## 4. Make [hydrus](https://github.com/HTTP-APIs/hydrus) and [agent](https://github.com/HTTP-APIs/hydra-python-agent) future proof
### Key points
Right now hydrus is a generic flask compatible server. Most commercial APIs contain large amounts of data distributed over multiple servers. The idea here is to improve the scalability of the database by deploying a hydrus instance for a set of <em>HydraClass</em>'es and then allowing linking by reference.
The parser should call for the deployment of a hydrus instance for each set of classes in the APIDoc, predicates between classes should be represented as links; by consequence, the agent should build its own representation by dereferencing the links.

### Skills Required
- Python
- Hydra
- Agent
- hydrus
- Semantic Web
- Software Engineering

**Difficulty Level**: *Hard*

**NOTE**: This is a sophisticated project and will require a significant understanding of various HydraEcosystem tools including hydrus, parser, and the agent. We understand there's a lot to be done here, so, we'll try to pair 2-3 students to complete the overall task providing students an opportunity to learn how to work in distributed teams.

## 5. Get Creative
We encourage creativity a lot and understand it is very important for you to work on the things you're really interested in. If you want, you can choose subparts from the ideas listed above or even come up with your own (discussing new ideas with mentors first is highly encouraged) to create the proposal best suited to your interests. The student can mix different components of these ideas to present an original proposal.

### Skills Required:
- A TON OF CREATIVITY

----


# [How do I get started ?](#getting-started)
 Getting started is pretty easy. Head over to our [homepage](http://hydraecosystem.org/) or the W3C [community page](https://www.hydra-cg.com/). There are a lot of demos, presentations, and talks to get you up to speed. Then head over to the [hydrus repo](https://github.com/HTTP-APIs/hydrus) and clone it. Play with it a little, try to understand how the current implementation works, try to fix some bugs or report any issues you can find [here](https://github.com/HTTP-APIs/hydrus/issues).
Lastly, don't hesitate to reach out in the [Slack community](https://join.slack.com/t/hydraecosystem/shared_invite/zt-ly4j3hg3-gVhJxgc6ykpGrel_N4Xvvg) if you have any question, we are very friendly people and we'll be more than happy to help you out.

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
- [Slack](https://hydraecosystem.slack.com)
- [W3C Group](https://www.w3.org/community/hydra/)
- Email
    - [Chris Andrew](mailto:chrisandrew119[AT]gmail[DOT]com)
    - [Akshay Dahiya](mailto:xadahiya[AT]gmail[DOT]com)
    - [Lorenzo Moriondo](mailto:tunedconsulting[AT]gmail[DOT]com)
    - [Samesh Lakhotia](mailto:samesh.lakhotia+work[AT]gmail[DOT]com)
    - [Priyanshu Nayan](heypriyanshu[AT]gmail[DOT]com)

----

## Appendix - Open Risk

Some material to jumpstart with Open Risk Management:

The starting point is an NPL (non-performing loan) ontology that descibes logical relations and data properties of a realistic bank loan portfolio. The ontology has around 8 major classes of data and 400+ fields.  In json-ld format, the ontology is available here (_there are more Open Risk ontologies and taxonomies but this one is the most relevant for the current stage of the project and GSOC21_) :

* [NPL Ontology as json-ld](https://www.openriskmanual.org/ns/nplo/ontology.json)

Using a web browser we can take a look at the ontology here. 

* [Human readable version](https://www.openriskmanual.org/ns/nplo/index-en.html)

The wiki description of all the data fields allows to continously update the descriptions and link with the usage of the data in practical operations and risk management documented in other parts of the wiki

* [Wiki description of the EBA NPL data domain](https://www.openriskmanual.org/wiki/EBA_NPL_Template)

The ontology is part of a broader toolkit / open source ecosystem for risk management tools, some background reading and further links are in this blog post and links therein

* [Introductory Blog post](https://www.openriskmanagement.com/non-performing-loan-ontology/)

One thing that could be useful (or not) but I want to mention is that we already have an open source REST implementation of the NPL data (as a django DRF project).  So this can be used by students to get a feel for what we are after. But it is still incomplete and in any case **it does not provide hateoas** which I think is the really powerful promise of hydra and the hydrus project. Because of the complexity and frequent changing nature of such loan databases providing "smart" tools that can make people's life a bit easier. The link to that project is here. 

* [Django based simple REST API of openNPL](https://github.com/open-risk/openNPL)
