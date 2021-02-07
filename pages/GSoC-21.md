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

## 1. General Improvements in [hydrus](https://github.com/HTTP-APIs/hydrus).
### Key points:
There is always room from improvement in our flagship server, hydrus:
- Updating the server according to the Hydra Spec.
- Creation of dynamic endpoints. Users need to be able to define endpoints that have some functionality. Right now hydrus can only serve static data and users are unable to define how incoming data is processed in a hydrus server.
- General improvements in code and optimizing the server functionality, refactoring.
- Keep up with the development of the querying system for the agent
- Implement Update operation(POST) on collections. Refer to [this](https://github.com/HTTP-APIs/hydrus/issues/494) issue for more details.
- Add more robust security features to hydrus.

**Skills Required**:
- Python
- Hydra
- Semantic Web
- Ability to write test suites
- Software Engineering

**Difficulty Level**: *Intermediate*

**Issues**<br/>
Some issues are already open for these, please check [issues](https://github.com/HTTP-APIs/hydrus/issues).


## 2. General Improvements in [agent](https://github.com/HTTP-APIs/hydra-python-agent).
### Key points:
The agent is a super cool way to interact with a hydra server, but there is lot of room for improvement. Some parts of this project can be:
- Improving the UI/UX of the agent.
- Add graph interaction events/actions support.
- Making the agent more responsive.
- Generalising the agent so that it works with any hydra enabled API. Right now the agent is strongly tied up with hydrus.
- Implement sync-mechanism for non-hydrus Hydra servers. (No backend updates pushed from the server)
- Optimise the graph storage and search mechanism in the client.
- Implement better design patterns for the frontend code.

**Skills Required**:
- Python
- Hydra
- ReactJS
- Javascript
- Redis

**Difficulty Level**: *Intermediate*

**Issues**<br/>
Some issues are already open for these, please check [issues](https://github.com/HTTP-APIs/hydra-python-agent-gui/issues).


## 3. Demos
### Key points:
We are always happy to include new ways to demonstrate the capability of hydra and how are tools can be used. Some demos might need additions to the tools to be able to work, so be ready to handle multiple codebases. Possiblities for the demos include.
- Extend the current flock demo to include more use cases and integrate the demo using hydrus and the agent.
- Create a demo to demonstrate the main advantages of hydra, i.e, dynamic changes in ther server do not affect the client. The objective is to create an API whose structure (paths to different kinds of data) is constantly changing, clients can still consume data by parsing the entry point vocabulary.
- Create a demo Hydra API for a publicly available dataset. This will show why Hydra is useful while also allowing the general public to be able to consume the dataset using Hydra. One example is the MusicBrainz public dataset. This demo includes analyzing the deployment scenario for the data, researching the specific domain to understand the data, creating Hydra documentation for the service and developing and deploying the service in GCLOUD.

**Skills Required**:
- Python
- Hydra
- Front and Backend development skills
- Google Cloud
- Semantic Web
- Ability to write test suites

**Difficulty Level**: *Intermediate* to *Hard*

You can discuss each idea in detail on the Slack channel. We would be happy to provide more info if anyone is interested in any of the above projects.


## 4. Make [hydrus](https://github.com/HTTP-APIs/hydrus) future proof
### Key points:
Right now hydrus is a generic flask compatible server. Most commercial APIs contain large amounts of data distributed over multiple servers. The idea here is to improve the scalability of the database by deploying a hydrus instance for a set of <em>HydraClass</em>'es and then allowing linking by reference.
The parser should call for the deployment of a hydrus instance for each set of classes in the APIDoc, predicates between classes should be represented as links; by consequence, the agent should build its own representation by dereferencing the links.

**Skills Required**:
- Python
- Hydra
- Agent
- hydrus
- Semantic Web
- Software Engineering

**Difficulty Level**: *Hard*

**NOTE**: This is a sophisticated project and will require a significant understanding of various HydraEcosystem tools including hydrus, parser, and the agent. We understand there's a lot to be done here, so, we'll try to pair 2-3 students to complete the overall task providing students an opportunity to learn how to work in distributed teams.

## 5. Get Creative
We encourage creativity a lot and understand it is very important for you to work on the things you're really interested in. If you want, you can choose subparts from the ideas listed above or even come up with your own (discussing new ideas with mentors first is highly encouraged) to create the proposal best suited to your interests.

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
