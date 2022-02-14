---
layout: page
title: Ideas page for GSoC 2022 | Hydraecosystem.org
comments: true
permalink: /gsoc-22
---

# Introduction
Welcome to Hydra Ecosystem's ideas page for [GSoC 2022](https://summerofcode.withgoogle.com/). 
For the 6th year since 2017 Hydra Ecosystem will be applying to be part of Google Summer of Code. This is the mentors' guidance about what the Community should try to achieve for this year and what your proposals should be focused on to contribute to the Community efforts.

We would like to receive proposals that encompass different aspects of the development. Different tools are under development and candidates can present projects to fulfill ideas on this page and issues listed at our Github [organization page](https://github.com/HTTP-APIs/).

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

# [Ideas for GSoC 2022](#Ideas)

## Improvements in Credit Risk API
The Hydra Ecosystem / [Open Risk](https://www.openriskmanagement.com/) project proposal for GS0C 2022 aims to enhance and improve the existing [hydra-creditrisk-poc](https://github.com/HTTP-APIs/creditrisk-poc).
Two contributors will be chosen to contribute on the same project with a high level of collaboration. Selected students shall be responsible for the maintenance, deployment, testing, documentation and enhancement of the extant Credit Risk API. If required, they may also be mandated to maintain and contribute to the existing repositories of the Organization, like `hydrus` , `hydra-python-agent`, revamping of the documentation and all the necessary tasks to achieve the objectives below.

The **main objective** of the project will be to deploy a "simulation" involving multiple `hydrus` instances to contain data on credit risk events, while a "controller" based on `hydra-python-agent` and GUI will be tested to be used as a supervisor for the updates of the kwnoledge base available in the network. This to collect feedback on the current state of the tools and to find out possible road map to improve and make the stack closer to readiness. 

### Objectives
The two best proposals will be chosen and integrated into a project to achieve these objectives:
* "DevOps track": improve deployment on GCP of the existing [hydra-credit risk-poc](https://github.com/HTTP-APIs/creditrisk-poc) and future POCs via scripting and reliability testing.
* Implement a network simulation for `hydra-credit risk-poc` with these characteristics: automatically deployable, multiple server (`hydrus`) instances, one `hydra-python-agent`; with focus on deploying and maintaining the [new documentation](https://github.com/HTTP-APIs/docs) ("Python track")
* ... and relative GUI instance reading/writing data from/to the servers ("Frontend track").
* Spreadsheet functionality (reading/writing data) from/to an xlsx document. Implemented e.g. as a python module invoked on command line.
* Take responsibility to maintain the cloud installation of the POC in the medium term to demonstrate the stack capabilities to newcomers ("Mentorship track").
* "Credit Risk track": explore the possibility of federated learning calculations on NPL data (adapting this [project](https://github.com/open-risk/openLGD))
* Anything proposed by the contributors that fits the activities of the Community

The candidates that present a proposal covering two or more of these "tracks" will be considered for the Program. The mentors will select two candidates to achieve the best results in these subjects.

## Improvements to the stack

Hydra Ecosystem provides different tools for different layers of the Web stack, the applicants can find ways of contributing according to their skills. The applicants are free to propose improvements and add them to their proposal, together with fixes to oustanding issues.

----


### Prerequisites

* Working knowledge for Git and Github and willingness to improve independently your knowledge
* Working knowledge of Docker and Google Cloud Platform (Compute Engine).
* Working knowledge of Python and popular database technology (some JavaScript involved for the GUI tool but also use of  Jupyter notebooks possible)
* Some prior minimal participation in the Community and contributions to the codebase

### What contributors will be mentored about

* How RDF/OWL and other W3C standards work (Semantic Web)
* Principles of Credit Portfolio Management and in particular credit data (for working with the `hydra-creditrisk-poc`). A short online course is available to understand the [credit data ontology](https://www.openriskacademy.com/enrol/index.php?id=62).
* Working knowledge of Hydra Ecosystem tools
* Programming
* Graph technologies (graph databases and visualization tools).


### Skills Required
- Python
- Hydra
- Semantic Web
- Web APIs, REST paradigm
- Software Engineering
- Google Cloud, Docker
- Basics understanding of, and interest in, financial business processes (lending, financial markets, etc): domain-specific support about banking will be provided by dedicated mentor (see Appendix below for further material)


# [How do I get started ?](#getting-started)
 Getting started is pretty easy. Head over to our [homepage](http://hydraecosystem.org/) or the W3C [community page](https://www.hydra-cg.com/). There are a lot of demos, presentations, and talks to get you up to speed. Then head over to the [hydrus repo](https://github.com/HTTP-APIs/hydrus) and clone it. Play with it a little, try to understand how the current implementation works, try to fix some bugs or report any issues you can find [here](https://github.com/HTTP-APIs/hydrus/issues).
Lastly, don't hesitate to reach out in the [Slack community](https://join.slack.com/t/hydraecosystem/shared_invite/zt-ly4j3hg3-gVhJxgc6ykpGrel_N4Xvvg) if you have any question, we are very friendly people and we'll be more than happy to help you out.

As a general entry point to understand the repositories, there is our [Wiki](http://hydraecosystem.org/) and related links. Having a clear insight of [Resource Description Framework](https://goo.gl/TCdYG3) is quite necessary, Mentors will give full support to catch up with it.

## FAQ

- ## What is Google Summer of Code?
Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors. The idea is to get students and other contributors involved and familiar with the open-source community and help them to put their summer break to good use.

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

----

## Appendix - Open Risk

![Loan Ontology](https://www.openriskmanagement.com/wp-content/uploads/2021/01/NPLO_0.1_Graph.png)

Some material to jumpstart with Open Risk Management:

The starting point is an NPL (non-performing loan) OWL ontology that descibes the logical relations (business logic) and data properties of a realistic bank loan portfolio. The ontology has currently around 8 major classes of data and 400+ fields describing everything about borrowers, loans and their credit history. In JSON-LD format, the ontology is available here:

* [NPL Ontology as JSON-LD](https://www.openriskmanual.org/ns/nplo/ontology.json)

Using a web browser we can take a look at the ontology here:

* [Human readable version](https://www.openriskmanual.org/ns/nplo/index-en.html)

There is a wiki description of all the data fields that links with the usage of the data in practical operations and risk management documented in other parts of the wiki:

* [Wiki description of the EBA NPL data domain](https://www.openriskmanual.org/wiki/EBA_NPL_Template)

The ontology is part of a broader toolkit/Open Source ecosystem for risk management tools, some background reading and further links are in this blog post and links therein:

* [Introductory Blog post](https://www.openriskmanagement.com/non-performing-loan-ontology/)

An existing and Open Source REST implementation of the NPL data (as a [django DRF project](https://www.django-rest-framework.org/)) can be used by students to get a feel for what the end result might look like. This implementation does not provide [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) which is a powerful aspect of Hydra and the hydrus project. Because of the complexity, frequently changing and incomplete data quality of loan databases providing "smart" tools that can make people's life easier would be a big win. The links to the reference openNPL project are here:

* [Django based simple REST API of openNPL](https://github.com/open-risk/openNPL)
* [Docker image for simple deployment](https://hub.docker.com/r/openrisk/opennpl_web)
