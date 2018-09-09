## Starting contributing

1. Read the blog posts from GSOC 2017: [Lorenzo](https://www.linkedin.com/pulse/gsoc-2017-python-hydra-making-summer-great-hacking-web-moriondo/) [Chris](https://gsocchrizandr.wordpress.com/the-book-of-hydrus/) [Akshay](https://xadahiya.github.io/Gsoc-Summary/)
2. Having a general understanding of RDF: [Wikipedia](https://en.wikipedia.org/wiki/Resource_Description_Framework) -  [Google Scholar](https://goo.gl/TCdYG3): especially the concept of representing data in triples.
3. Having a general understanding of [Linked Data](https://www.w3.org/DesignIssues/LinkedData.html)
4. Having a general understanding of [JSON-LD](https://dl.acm.org/citation.cfm?id=2307827)
5. Read the old [HYDRA Draft](https://www.hydra-cg.com/spec/latest/core/) and [updated specifications](https://github.com/HydraCG)
6. Read this seminal [paper about Web APIs](https://arxiv.org/abs/1609.07108)
7. Read [hydrus WIKI](https://github.com/HTTP-APIs/hydrus/wiki). Run `hydrus` and try to set up a basic API. Read the [documentation](http://hydrus.readthedocs.io/en/latest/)
8. If you want to have fun with a more dynamic demo, run [hydra-flock-demo](https://github.com/HTTP-APIs/hydra-flock-demo)
9. There are different rooms in Gitter in which to interact with other contributors:
* [Demos room: talk about creating new demo implementations](https://gitter.im/HTTP-APIs/Demos-creation)
* [Improving hydrus room: issues, solutions and ideas](https://gitter.im/HTTP-APIs/Improving-Hydrus)
* [Beginners: experienced contributors help newcomers](https://gitter.im/HTTP-APIs/Beginners)
10. Read the other blogposts in our [Medium Publication](https://medium.com/w3c-hydra-development-community)

## General guidelines to contributing

### About OpenSource and Github
* Read this [how-to about Github workflow here](https://guides.github.com/introduction/flow/) if you are not familiar with
* Read all the texts related to [contributing for an OS community](https://github.com/HTTP-APIs/hydrus/tree/master/.github)
* Read this [how-to about writing a PR](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) and this [other how-to about writing a issue](https://wiredcraft.com/blog/how-we-write-our-github-issues/)

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
* Everything should work and be tested for Python 3.5.2 and above.

### Others
* In general, no permission is needed to work on the code. Fork `develop` branch and keep your downstream branch updated; when done submit a PR and ask for reviewing. PR is the natural place for code comparison and corrections. Code for issues with multiple PRs will be integrated at reviewing time.

## Worth knowing
* Writing a [proposal for GSOC](https://google.github.io/gsocguides/student/writing-a-proposal)
* OpenAPI [framework](https://www.openapis.org/)
* [A Web API ecosystem through feature-based reuse](https://arxiv.org/abs/1609.07108)
* [Triple Pattern Fragments](https://biblio.ugent.be/publication/8050661/file/8050671.pdf)
* List of useful papers [here](https://arxiv.org/find/all/1/all:+verborgh/0/1/0/all/0/1)
* Python [design patterns](https://github.com/crista/exercises-in-programming-style)


## Design annotations
* `hydrus` is developed in `flask` because the applications we had in mind were mostly related to IoT and sensors, so it was supposed to be lightweight and functional. By the way we can consider also more structured options like having versions that works with Django or Pyramid.
* Read the [issues labeled as "wiki"](https://github.com/HTTP-APIs/hydrus/issues?q=is%3Aissue+is%3Aopen+label%3Awiki)

---
* [Back to Index](README.md)
