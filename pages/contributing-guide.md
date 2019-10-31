---
layout: page
title: Contributor's Guide | Hydraecosystem.org
permalink: /contributors-guide
---

# Contribute to Hydra Ecosystem
The Hydra Ecosystem can only grow through the contributions of this community. Thanks so much for your enthusiasm and your work - we appreciate everything you do!
A general introduction: [What does it mean to be a Open Source Maintainer](https://mozilla.github.io/maintainer-cohort/).
Below is the list of blogs/articles which you must read before contributing to any project.

1. Read the blog posts from GSOC 2017: [Lorenzo](https://www.linkedin.com/pulse/gsoc-2017-python-hydra-making-summer-great-hacking-web-moriondo/) [Chris](https://gsocchrizandr.wordpress.com/the-book-of-hydrus/) [Akshay](https://xadahiya.github.io/Gsoc-Summary/)
2. Having a general understanding of RDF: [Wikipedia](https://en.wikipedia.org/wiki/Resource_Description_Framework) -  [Google Scholar](https://goo.gl/TCdYG3): especially the concept of representing data in triples.
3. Having a general understanding of [Linked Data](https://www.w3.org/DesignIssues/LinkedData.html)
4. Having a general understanding of [JSON-LD](https://dl.acm.org/citation.cfm?id=2307827)
5. Read these two papers [Hydra: A Vocabulary for Hypermedia-Driven Web APIs
(Markus Lanthaler, Christian Gütl (2013))](http://www.markus-lanthaler.com/research/hydra-a-vocabulary-for-hypermedia-driven-web-apis.pdf) and [Creating 3rd Generation Web APIs with Hydra
(Markus Lanthaler (2013))](http://www.markus-lanthaler.com/research/creating-3rd-generation-web-apis-with-hydra.pdf)
6. Read the old [HYDRA Draft](https://www.hydra-cg.com/spec/latest/core/) and [updated specifications](https://github.com/HydraCG). *Very important* is the current work done for [Draft's use-cases](https://github.com/HydraCG/Specifications/tree/master/drafts/use-cases)
7. Read this seminal [paper about Web APIs](https://arxiv.org/abs/1609.07108). This [other paper](https://arxiv.org/pdf/1809.01622.pdf) explains different use cases for graphs applied to databases.
8. Read [Hydra-CG gitbook](https://github.com/HydraCG/gitbook)
9. Read [hydrus WIKI](https://www.hydraecosystem.org/00-Home). Run `hydrus` and try to set up a basic API. Read the [documentation](http://hydrus.readthedocs.io/en/latest/)
10. If you want to have fun with a more dynamic demo, run [hydra-flock-demo](https://github.com/HTTP-APIs/hydra-flock-demo)
11. Join us on [slack](https://join.slack.com/t/hydraecosystem/shared_invite/enQtNzM3NTg5NzQ2MDUxLWU1MjM3ZGRhZWM4ZTg1ODBjMTljNTQwNzAwMGM3ZDlmYTY3Y2E4OGJmN2NlZWRjMWIzY2MzN2NjOTIyYmQ1ZjU). There are different channels in Slack in which to interact with other contributors:
* [#general: talk about anything related to Hydra Ecosystem](https://app.slack.com/client/TMGNKBP5X/CMR9RFB0E)
* [#hydrus: discuss issues, solutions and ideas for hydrus](https://app.slack.com/client/TMGNKBP5X/CMR0C8WJ3)
* [#tech-writing: suggestions related to documentation, website content can be shared here](https://app.slack.com/client/TMGNKBP5X/CNBS844FL)
12. Read the other blogposts in our [Medium Publication](https://medium.com/w3c-hydra-development-community)
13. Get familiar with [Docker container engine](https://docker-curriculum.com/) and its best practices to deploy virtualized environments.

## Community values

In the interest of fostering an open and welcoming environment, contributors and maintainers pledge to make participation in our project and our community a harassment-free experience for everyone - regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

Examples of behaviors that contribute to creating a positive environment include:

* Use welcome and inclusive language.
* Be respectful of differing viewpoints and experiences.
* Gracefully accept constructive criticism.
* Foster what's best for the community.
* Show empathy for other community members.

Decisions are made based on technical merit and consensus. The HydraEcosystem community aspires to treat everyone equally, and to value all contributions. For more information on best practices in the TensorFlow community, please review our [Code of Conduct](https://github.com/HTTP-APIs/hydrus/blob/master/.github/CODE_OF_CONDUCT.md).

## Proposing a Change
If you intend to propose a change, we recommend first ask for help in the [chat](), then consider opening a issue. This lets us reach an agreement on your proposal before you put significant effort into it.
While reporting an issue remember that it adheres to the issue format given over [here](https://github.com/HTTP-APIs/hydrus/blob/master/.github/ISSUE_TEMPLATE.md)

If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.

You may also want to read this [how-to about writing a PR](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) and this [other how-to about writing a issue](https://wiredcraft.com/blog/how-we-write-our-github-issues/)

## Your First Pull Request
Working on your first Pull Request?. Read this [how-to about Github workflow here](https://guides.github.com/introduction/flow/) if you are not familiar with. You can also learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

To help you get familiar with our contribution process, we recommend you to pick any issue (Which raises interest in you) from any repo of your choice and start working on it. That's a great way to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take it over but you should still leave a comment.

## Sending a Pull Request
The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

Before submitting a pull request, please make sure the following is done:

* Every PR should follow the PR template. PR template for hydrus can be found [here](https://github.com/HTTP-APIs/hydrus/blob/master/.github/PULL_REQUEST_TEMPLATE.md).
* Code in PRs should be accurately compliant with [PEP-8](https://www.python.org/dev/peps/pep-0008/), checking code with pylint is fine.
* Every method in the PR should have a compelling docstring in the format:

```python
def test_method(arg1, arg2, ...):
  """
  Description of what the method performs.

  Generic Notes to consider when running the method if any

 :param arg1: what kind of value is expected
 :param arg2: what kind of value is expected
 :return : what is returned or `None`
 """
```
* Every module is and should in future provide type annotations using mypy
* Before opening a PR be sure that all the tests pass successfully. If any is failing for non-related reasons, annotate the test failure in the PR comment.
* Any change should be PRed first in develop, master can only receive merge from develop.
* Everything should work and be tested for Python 3.5.2 and above.

## Others
* In general, no permission is needed to work on the code. Fork develop branch and keep your downstream branch updated; when done submit a PR and ask for reviewing. PR is the natural place for code comparison and corrections. Code for issues with multiple PRs will be integrated at reviewing time.
* If you are working on a new idea/core modification it’s important that it adhere to the [HYDRA Draft](https://www.hydra-cg.com/spec/latest/core/). We don’t add anything to the API documentation that is not defined in the Hydra spec.

## Worth Knowing
* Writing a [proposal for GSOC](https://google.github.io/gsocguides/student/writing-a-proposal)
* OpenAPI [framework](https://www.openapis.org/)
* [A Web API ecosystem through feature-based reuse](https://arxiv.org/abs/1609.07108)
* [Triple Pattern Fragments](https://biblio.ugent.be/publication/8050661/file/8050671.pdf)
* List of useful papers [here](https://arxiv.org/find/all/1/all:+verborgh/0/1/0/all/0/1)
* List of publication by Markus Lanthaler [here](http://www.markus-lanthaler.com/publications)
* Python [design patterns](https://github.com/crista/exercises-in-programming-style)
* [Problem solving with algorithms in Python](https://runestone.academy/runestone/static/pythonds/index.html)
* [Inside Python Virtual Machine](https://leanpub.com/insidethepythonvirtualmachine/read)
* [How to design programs](https://htdp.org/2018-01-06/Book/index.html)


## Asking for help
You can reach us at [our slack channel](https://app.slack.com/client/TMGNKBP5X/CMR0C8WJ3).