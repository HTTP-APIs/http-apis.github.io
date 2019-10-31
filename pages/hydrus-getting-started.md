---
layout: page
title: Hydrus | Beginner's Guide | Hydraecosystem.org
permalink: getting-started-with-hydrus
---

# Hydrus | Beginner's Guide

## Quick Start

* with *Docker* and *docker-compose* installed, run `docker-compose up --build`
* open the browser at `http://localhost:8000/api/vocab`

You should be displaying the example API as served by the server.

Add your own Hydra documentation file
-------------------------------------
To serve your own Hydra-RDF documentation file:
* create a `doc.py` file as the ones in `examples/` directory containing your own *ApiDoc*
* set the `APIDOC_REL_PATH` variable in `docker-compose.yml`. This should the relative path from the project root
* start-up the demo as above.

You should be displaying your API as served by the server.

## Requirements

The system is built over the following standards and tools:
- [Flask](http://flask.pocoo.org/) a Python based micro-framework for handling server requests and responses.
- [JSON-LD](http://json-ld.org/spec/latest/json-ld/) as the preferred data format.
- [Hydra](http://www.hydra-cg.com/) as the API standard.
- [SQLAlchemy](http://www.sqlalchemy.org/) as the backend database connector for storage and related operations.

Apart from this, there are also various Python packages that hydrus uses. Using `python setup.py install` installs all the required dependencies.

**NOTE:** You'll need to use `python3` not `python2`.

<a name="demo"></a>

## Demo

To run a demo for hydrus using the sample API, just do the following:

Clone hydrus:
```bash
git clone https://github.com/HTTP-APIs/hydrus
```
Change directory and switch to the develop branch:
```bash
cd hydrus

git checkout -b develop origin/develop
```

Install hydrus using:
```bash
pip3 install -r requirements.txt

python3 setup.py install
```
 
and run the server using:

```bash
hydrus serve
```

The demo should be up and running on `http://localhost:8080/serverapi/`.

## Know more?

For more detailed info, head over to the [Hydrus](/hydrus) section.

<a name="troubleshooting"></a>

## Troubleshooting

**If you run into any error** try the [Github search mechanism](https://github.com/HTTP-APIs/hydrus/issues?utf8=%E2%9C%93&q=) or reach us at [Slack](https://app.slack.com/client/TMGNKBP5X/CMR9RFB0E) or send a message.