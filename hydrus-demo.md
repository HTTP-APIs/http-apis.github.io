<a name="req"></a>
Requirements
-------------
The system is built over the following standards and tools:
- [Flask](http://flask.pocoo.org/) a Python based micro-framework for handling server requests and responses.
- [JSON-LD](http://json-ld.org/spec/latest/json-ld/) as the preferred data format.
- [Hydra](http://www.hydra-cg.com/) as the API standard.
- [SQLAlchemy](http://www.sqlalchemy.org/) as the backend database connector for storage and related operations.

Apart from this, there are also various Python packages that Hydrus uses. Using `python setup.py install` installs all the required dependencies.

**NOTE:** You'll need to use `python3` not `python2`.

<a name="demo"></a>
Demo
-------------
To run a demo for Hydrus using the sample API, just do the following:

Clone Hydrus:
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
pip install .
```
or
```bash
python setup.py install
```

and run the server using:

```bash
hydrus serve
```

The demo should be up and running on `http://localhost:8080/serverapi/`.

<a name="usage"></a>
Usage
-------------
For more info, head to the [Usage](https://github.com/HTTP-APIs/hydrus/wiki/Usage) section of the [wiki](https://github.com/HTTP-APIs/hydra-ecosystem-wiki/blob/master/01-Usage.md).
