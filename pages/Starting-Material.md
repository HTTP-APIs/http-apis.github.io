---
layout: page
title: Starting Material | Hydraecosystem.org
permalink: /Starting-Material
---

## Starting contributing

A general introduction: [What does it mean to be a Open Source Maintainer](https://mozilla.github.io/maintainer-cohort/).
A brief [history of Semantic Web technologies and data processing](https://derwen.ai/docs/kgl/overview/).

1. Read the blog posts from GSOC 2017: [Lorenzo](https://www.linkedin.com/pulse/gsoc-2017-python-hydra-making-summer-great-hacking-web-moriondo/) [Chris](https://gsocchrizandr.wordpress.com/the-book-of-hydrus/) [Akshay](https://xadahiya.github.io/Gsoc-Summary/)
2. What is a [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API; how is it different from an [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) API
3. [What is a graph](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/lecture-12-graphs-networks-incidence-matrices/) and how it can be represented with linear algebra. Watch [this video about Graph structures](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/video-lectures/lecture-6-graph-theory-and-coloring/) and [this one about directed graphs](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/video-lectures/lecture-10-graph-theory-iii/)
4. General understanding of RDF: [Wikipedia](https://en.wikipedia.org/wiki/Resource_Description_Framework) -  [Google Scholar](https://goo.gl/TCdYG3): especially the concept of representing data in triples. ([video reference](https://www.youtube.com/playlist?list=PLea0WJq13cnDDe8V7eVLReIaOnFztOEAq))
5. What are [Linked Data](https://www.w3.org/DesignIssues/LinkedData.html) ([video reference](https://www.youtube.com/watch?v=4x_xzT5eF5Q))
6. What is [JSON-LD](https://dl.acm.org/citation.cfm?id=2307827) ([video reference](https://www.youtube.com/watch?v=vioCbTo3C-4))
7. Read these two papers [Hydra: A Vocabulary for Hypermedia-Driven Web APIs
(Markus Lanthaler, Christian Gütl (2013))](http://www.markus-lanthaler.com/research/hydra-a-vocabulary-for-hypermedia-driven-web-apis.pdf) and [Creating 3rd Generation Web APIs with Hydra
(Markus Lanthaler (2013))](http://www.markus-lanthaler.com/research/creating-3rd-generation-web-apis-with-hydra.pdf)
8. Read the old [HYDRA Draft](https://www.hydra-cg.com/spec/latest/core/) and [updated specifications](https://github.com/HydraCG). *Very important* is the current work done for [Draft's use-cases](https://github.com/HydraCG/Specifications/tree/master/drafts/use-cases)
9. Read this seminal [paper about Web APIs](https://arxiv.org/abs/1609.07108). This [other paper](https://arxiv.org/pdf/1809.01622.pdf) explains different use cases for graphs applied to databases.
10. Read [Hydra-CG gitbook](https://github.com/HydraCG/gitbook)
11. Read [hydrus WIKI](https://www.hydraecosystem.org/00-Home). Run `hydrus` and try to set up a basic API. Read the [documentation](http://hydrus.readthedocs.io/en/latest/)
12. If you want to have fun with a more dynamic demo, run [hydra-flock-demo](https://github.com/HTTP-APIs/hydra-flock-demo)
13. All the [conversations take place on Organization's Slack](https://join.slack.com/t/hydraecosystem/shared_invite/enQtNzM3NTg5NzQ2MDUxLWU1MjM3ZGRhZWM4ZTg1ODBjMTljNTQwNzAwMGM3ZDlmYTY3Y2E4OGJmN2NlZWRjMWIzY2MzN2NjOTIyYmQ1ZjU), check the appropriate *#channel*
14. Read the other blogposts in our [Medium Publication](https://medium.com/w3c-hydra-development-community)
15. Get familiar with [Docker container engine](https://docker-curriculum.com/) and its best practices to deploy virtualized environments.

## General guidelines to contributing

### About OpenSource and Github
* Read this [how-to about Github workflow here](https://guides.github.com/introduction/flow/) if you are not familiar with
* Read all the texts related to [contributing for an OS community](https://github.com/HTTP-APIs/hydrus/tree/master/.github)
* Read this [how-to about writing a PR](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) and this [other how-to about writing a issue](https://wiredcraft.com/blog/how-we-write-our-github-issues/)
* In general, *no permission is needed to work on the code*. Fork `develop` branch and keep your downstream branch updated; when done submit a PR and ask for reviewing. PR is the natural place for code comparison and corrections. Code for issues with multiple PRs will be integrated at reviewing time.
* If you are working on a new idea/core modification it's important that it adhere to the [HYDRA Draft](https://www.hydra-cg.com/spec/latest/core/). We don't add anything to the API documentation that is not defined in the Hydra spec.

### Asking for help
* If you find a problem, first ask for [help in the chat](https://gitter.im/HTTP-APIs/Lobby), then consider opening a issue.
* Please check existing or closed issues or PRs when thinking about opening a new one.

### Opening a Pull Request
* Every PR should follow the PR template. PR template for [hydrus](https://github.com/HTTP-APIs/hydrus) can be found [here](https://github.com/HTTP-APIs/hydrus/blob/master/.github/PULL_REQUEST_TEMPLATE.md).
* Code in PRs should be accurately **compliant** with [PEP-8](https://www.python.org/dev/peps/pep-0008/), checking code with `pylint` is fine.
* Every method in the PR should have a compelling **docstring** in the format:
```
def test_method(arg1, arg2, ...):
    """
    Description of what the method performs.

    Generic Notes to consider when running the method if any

   :param arg1: what kind of value is expected
   :param arg2: what kind of value is expected
   :return : what is returned or `None`
   """
```
* Every module is and should in future provide **type annotations** using `mypy`
* Before opening a PR be sure that all the **tests** pass successfully. If any is failing for non-related reasons, annotate the test failure in the PR comment.
* Any change should be PRed first in `develop`, `master` can only receive merge from `develop`.
* Everything should work and be tested for Python 3.6.0 and above.

## Worth knowing
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


## Design annotations
* `hydrus` is developed in `flask` because the applications we had in mind were mostly related to IoT and sensors, so it was supposed to be lightweight and functional. By the way we can consider also more structured options like having versions that works with Django or Pyramid.
* Read the [issues labeled as "wiki"](https://github.com/HTTP-APIs/hydrus/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Awiki+)

---

