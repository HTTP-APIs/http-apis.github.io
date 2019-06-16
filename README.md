# Hydra Ecosystem Documentation

This is the source-code behind [hydraecosystem.org](https://hydraecosystem.org), the official documentation of the Hydra Ecosystem toolset.

## Viewing the Documentation Offline

The documentation is hosted on [GitHub Pages](https://pages.github.com) and uses the static site generator named [Jekyll](https://jekyllrb.com). If you want to see what your modifications to the documentation would look like, before you make a PR, please run the following commands:

- Check if you have Jekyll installed. if not, follow the [installation guide](https://jekyllrb.com/docs)
```bash
jekyll -v
```
- Start a live-server which serves statically generated content, changes made will make real-time changes to it.
```bash
bundle exec jekyll serve
```

**Note:** Just running the `jekyll` command without any arguments, might build a static website in html form with-in the `public` directory, please make sure not to include this in your PR.

# Contributing

The Hydra Ecosystem is an Open Soure project and we have our source code licensed under the permissible MIT license, please make any contribution to the project by opening an issue and a subsequent PR to solve the same.
