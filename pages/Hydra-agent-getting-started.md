---
layout: page
title: Hydra Python Agent | Beginner's Guide | Hydraecosystem.org
permalink: getting-started-hydra-python-agent
---

# Hydra Python Agent | Beginner's Guide 

## Quick Start

This Hydra Agent implementation has three different interfaces at the moment:

- [A Web-based GUI](https://github.com/HTTP-APIs/hydra-python-agent-gui/tree/agent-gui-1.0/console-frontend) - It provides a user-friendly user interface for hydra python agent, Using which we can interact with currently running Hydrus server utilizing supported actions which can be`GET`, `POST`, `PUT` or `DELETE`. In case understanding generic behaviour of Smart client and it's automatic request building are some of your aims, Web Based GUI might be a good place for you to improve your understanding.  
- [A Python package](https://github.com/HTTP-APIs/hydra-python-agent/#user-content-agent-package) - So that one can use it in his code whenever he feel there is a need to communicate with the Hydrus server.
- [Natural-language-like command line tool](#natural-language-like-command-line-tool) - At the moment it is just a proof-of-concept. It is still a `GET` only implementation. 

## Installation

**NOTE:** You'll need to use python3. Using venv(virtual environment) is recommended.

Clone and setup a virtual environment:
   
    git clone https://github.com/HTTP-APIs/hydra-python-agent.git
    cd hydra-python-agent
    python3 -m venv venv
    source venv/bin/activate

Install dependencies and setup Agent:

    pip3 install --upgrade pip
    pip3 install -r requirements.txt
    python3 setup.py install

Setup Redis which is used as caching layer(if permission denied use `sudo`):

    ./redis_setup.sh

**Setup hydrus**
Since this is an API Client, we need an appropriate Hydra Server to make quieries. To setup a localhost follow the instructions at [Hydrus | Beginner's Guide](/getting-started-with-hydrus).`hydrus serve --no-auth` can be run to skip setting up headers.

#### Agent package 
After installing the Agent and running Redis, [as per instructions above](https://github.com/HTTP-APIs/hydra-python-agent/#user-content-installation), you can do something like:

```
from hydra_agent.agent import Agent 

agent = Agent("http://localhost:8080/serverapi/") # <- hydrus Server URL 
agent.get("http://localhost:8080/serverapi/DroneCollection/")
```

The agent supports GET, PUT, POST or DELETE:

- **GET** - used to READ resources or collections
- **PUT** - used to CREATE new resources in the Server
- **POST** - used to UPDATE resources in the Server
- **DELETE** - used to DELETE resources in the Server

**To GET** a existing resource you should:
```
agent.get("http://localhost:8080/serverapi/<CollectionType>/<Resource-ID>")
agent.get("http://localhost:8080/serverapi/<CollectionType>/")
```

**To PUT** a new resource you should:
```
new_resource = {"@type": "Drone", "name": "Drone 1", "model": "Model S", ...}
agent.put("http://localhost:8080/serverapi/<CollectionType>/", new_resource)
```

**To UPDATE** a resource you should:
```
existing_resource["name"] = "Updated Name"
agent.post("http://localhost:8080/serverapi/<CollectionType>/<Resource-ID>", existing_resource)
```

**To DELETE** a resource you should:
```
agent.delete("http://localhost:8080/serverapi/<CollectionType>/<Resource-ID>")
```

More than that, Agent extends Session from https://2.python-requests.org/en/master/api/#request-sessions, so all methods like auth, cookies, headers and so on can also be used.

### Natural-language-like Command Line Tool
If you've followed the [installation](#installation) instructions you can run: 

    python hydra_agent/querying_mechanism.py

Another alternative to run the CLT is using docker componse. To run **both Redis server and the client**(stop any Redis instance before), you can run the command:
    
        docker-compose run client

To query you should provide a hydrus URL first:

```
     url>>> http://localhost:8080/serverapi/ 
   
```

**Important: If failing to connect to localhost** while running the Agent via Docker, head to [issue #104](https://github.com/HTTP-APIs/hydra-python-agent/issues/104#issuecomment-497381440).

- **Natural Language querying format**

Run help inside the CLT to get the querying format.

        >>>help # it will provide the querying format

You can query the server with the following format:


> Get all endpoints:- **show endpoints**
Get all class_endpoints:- **show classEndpoints**
Get all collection_endpoints:- **show collectionEndpoints**
Get all members of collection_endpoint:- **show < collection_endpoint > members**
Get all properties of objects:- **show objects< endpoint_type > properties**
Get all properties of any member:- **show object< id_of_member > properties **
Get all classes properties:- **show class< class_endpoint > properties**
Get data with compare properties:- **show < key > < value > and/or < key1 > < value1 >**
Get data by using both opeartions(and,or)  you should use brackets like:- **show model xyz and (name Drone1 or name Drone2) or, show < key > < value > and (< key > < value > or < key > < value >)**

For more detail visit this [link](https://github.com/HTTP-APIs/hydra-ecosystem-wiki/blob/master/hydra-agent-redis-graph.md)

