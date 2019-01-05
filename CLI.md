---
layout: page
title: Command Line Utility - Hydrus | Hydraecosystem.org
---

# Command Line Utility - Hydrus

This page explains in detail the usage of the command line utility of hydrus.

Table of contents
-------------
* [Using the CLI](#usingthecli)
* [CLI Options](#cliops)
    * [--adduser / -u](#cliops-adduser)
    * [--api / -a](#cliops-api)
    * [--auth / --no-auth](#cliops-auth)
    * [--dburl / -b](#cliops-dburl)
    * [--hydradoc / -d](#cliops-hydradoc)
    * [--port / -p](#cliops-port)
    * [--serverurl / -s](#cliops-serverurl)
    * [--token / --no-token](#cliops-token)
* [CLI Aguments](#cliargs)
    * [serve](#cliargs-serve)
* [Example Server Setup](#examplesetup)

<a name="usingthecli"></a>
## Using the CLI

The `serve` command starts the server. Using `hydrus serve` from the terminal simply fires up the server with the **following default values**:
```
--adduser: tuple([1, "test"])
--api: "serverapi"
--auth/--no-auth: True
--dburl: "sqlite:///:memory:"
--hydradoc: "doc.jsonld"
--port: 8080
--serverurl: "http://localhost/"
--token/--no-token: True
```

<a name="cliops"></a>
## Options
<a name="cliops-adduser"></a>
#### **--adduser / -u**
##### Adds a new user to the API with the given username and passphrase.
```
Syntax:
--adduser <username (integer)> <passphrase (text)>

or

-u <username (integer)> <passphrase (text)>
```
<a name="cliops-api"></a>
#### **--api / -a**
##### Sets a custom API name.
```
Syntax:
--api <API Name (text)>

or

-a <API Name (text)>
```
<a name="cliops-auth"></a>
#### **--auth / --no-auth**
##### Enables/Disables the user authentication for the API.
```
Syntax:
--auth

or

--no-auth
```
<a name="cliops-dburl"></a>
#### **--dburl / -b**
##### Sets the database URL for the API.
```
Syntax:
--dburl <DB URL (text/url)>

or

-b <DB URL (text/url)>
```
<a name="cliops-hydradoc"></a>
#### **--hydradoc / -d**
##### Sets the location to HydraDocumentation (in jsonld) for the server.
```
Syntax:
--hydradoc <Link to file (text)>

or

-d <Link to file (text)>
```
<a name="cliops-port"></a>
#### **--port / -p**
##### Sets the port for the API server.
```
Syntax:
--port <Port number (integer)>

or

-p <Port number (integer)>
```
<a name="cliops-serverurl"></a>
#### **--serverurl / -s**
##### Sets the URL for the server to be hosted at.
```
Syntax:
--serverurl <URL (text/url)>

or

-s <URL (text/url)>
```
<a name="cliops-token"></a>
#### **--token / --no-token**
##### Enables/Disables the user token for the API.
```
Syntax:
--token

or

--no-token
```
<a name="cliargs"></a>
# Arguments
<a name="cliargs-serve"></a>
##### `serve`: Fires up the server with the given options, or using default values.

<a name="examplesetup"></a>
# Example Server Setup
Setting up a server with custom options can be done as follows:
```bash
hydrus serve --api hydrus --port 9000 --adduser 1 test2
```

---

