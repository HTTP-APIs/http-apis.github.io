## Starting contributing

1. Read the blog posts from GSOC 2017: [Lorenzo](https://www.linkedin.com/pulse/gsoc-2017-python-hydra-making-summer-great-hacking-web-moriondo/) [Chris](https://gsocchrizandr.wordpress.com/the-book-of-hydrus/) [Akshay](https://xadahiya.github.io/Gsoc-Summary/)
2. Having a general understanding of RDF: [Wikipedia](https://en.wikipedia.org/wiki/Resource_Description_Framework) -  [Google Scholar](https://goo.gl/TCdYG3): especially the concept of representing data in triples.
3. Read the old [HYDRA Draft](https://www.hydra-cg.com/spec/latest/core/) and [updated specifications](https://github.com/HydraCG)
4. Read [hydrus WIKI](https://github.com/HTTP-APIs/hydrus/wiki). Run `hydrus` and try to set up a basic API. Read the [documentation](http://hydrus.readthedocs.io/en/latest/)
5. If you want to have fun with a more dynamic demo, run [hydra-flock-demo](https://github.com/HTTP-APIs/hydra-flock-demo)
6. There are different rooms in Gitter in which to interact with other contributors:
* [Study Room: share what you have found!](https://gitter.im/HTTP-APIs/Improving-Hydrus)
* [Demos room: talk about creating new demo implementations](https://gitter.im/HTTP-APIs/Demos-creation)
* [Improving hydrus room: issues, solutions and ideas](https://gitter.im/HTTP-APIs/Improving-Hydrus)
* [Beginners: experienced contributors help newcomers](https://gitter.im/HTTP-APIs/Beginners)

## General guidelines to contributing 
* Read this [how-to about Github workflow here](https://guides.github.com/introduction/flow/) if you are not familiar with
* Read all the texts related to [contributing for an OS community](https://github.com/HTTP-APIs/hydrus/tree/master/.github)
* Read this [how-to about writing a PR](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) and this [other how-to about writing a issue](https://wiredcraft.com/blog/how-we-write-our-github-issues/)
* If you find a problem, first ask for [help in the chat](https://gitter.im/HTTP-APIs/Lobby), then consider opening a issue.
* Please check existing or closed issues or PRs when thinking about opening a new one.
* Before opening a PR be sure that all the tests pass successfully. If any is failing for non-related reasons, annotate the test failure in the PR comment.
* Any change should be PRed first in `develop`, `master` can only receive merge from `develop`.
* Everything should work and be tested for Python 3.5.2 and above.
* In general, no permission is needed to work on the code. Fork master, submit a PR and ask for reviewing. PR is the natural place for code comparison and corrections. Code for issues with multiple PRs will be integrated at reviewing time.
* Code in PRs should be accurately compliant with [PEP-8](https://www.python.org/dev/peps/pep-0008/), checking code with `pylint` is fine.
* Every module is and should in future provide type annotations using `mypy`

## Worth knowing in the ecosystem
* ...


## Design annotations
* `hydrus` is developed in `flask` because the applications we had in mind were mostly related to IoT and sensors, so it was supposed to be lightweight and functional. By the way we can consider also more structured options like having versions that works with Django or Pyramid.
* Read the [issues labeled as "wiki"](https://github.com/HTTP-APIs/hydrus/issues?q=is%3Aissue+is%3Aopen+label%3Awiki)
