---
layout: page
title: Hydra Core | Hydraecosystem.org
permalink: /Core
---

# hydra-python-core

An introduction to the `hydra_python_core` library, which provides the core functions to implement the official Hydra Specification in the  Python programming language.

Currently the library mainly consists of 2 modules `doc_writer` and `doc_maker` which help hydrus generalise a lot of things.

- `doc_writer` creates a new API Documentation as well as a `HydraDoc` object while
- `doc_maker` uses an existing API Documentation to create a `HydraDoc` objects



### Installation

To install the library:

```bash
pip install git+https://github.com/HTTP-APIs/hydra-python-core.git#egg=hydra_python_core
```

**Note :** While using hydrus, the library doesn't need to be installed separately as it is a part of its `requirements.txt`.



### Usage

To import the modules from your python code, use:

```python
from hydra_python_core import doc_writer, doc_maker
```
