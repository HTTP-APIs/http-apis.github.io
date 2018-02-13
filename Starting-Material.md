## Starting contributing

* Having understanding of RDF: [Wikipedia](https://en.wikipedia.org/wiki/Resource_Description_Framework) -  [Google Scholar](https://goo.gl/TCdYG3)
* Read the old [HYDRA Draft](https://www.hydra-cg.com/spec/latest/core/) and [updated specifications](https://github.com/HydraCG)
* Read the blog posts from GSOC 2017: [Lorenzo](https://www.linkedin.com/pulse/gsoc-2017-python-hydra-making-summer-great-hacking-web-moriondo/) [Chris](https://gsocchrizandr.wordpress.com/the-book-of-hydrus/) [Akshay](https://xadahiya.github.io/Gsoc-Summary/)
* Read [hydrus WIKI](https://github.com/HTTP-APIs/hydrus/wiki). Run `hydrus` and try to set up a basic API.
* If you want to have fun with a more dynamic demo, run [hydra-flock-demo](https://github.com/HTTP-APIs/hydra-flock-demo)

## Worth knowing in the ecosystem
* ...


## Design annotations
* `hydrus` is developed in `flask` because the applications we had in mind were mostly related to IoT and sensors, so it was supposed to be lightweight and functional. By the way we can consider also more structured options like having versions that works with Django or Pyramid.
* Read the [issues labeled as "wiki"](https://github.com/HTTP-APIs/hydrus/issues?q=is%3Aissue+is%3Aopen+label%3Awiki)

## Contributing to code
* Before opening a PR be sure that all the tests pass successfully. If any is failing for non-related reasons, annotate the test failure in the PR comment.
* Any change should be PRed first in `develop`, `master` can only receive merge from `develop`.
* Everything should work and be tested for Python 3.5.2 and above.