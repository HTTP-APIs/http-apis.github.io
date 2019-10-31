---
layout: page
title: Hydra Python Agent | Hydraecosystem.org
permalink: /hydra-python-agent
---

# Hydra Python Agent

Hydra Python Agent is a python based Smart Client used to interact with Hydrus by providing a CRUD interface. It has a very elegant and user-friendly GUI Demo, It may help you understand the tool much better, you can find it [here](https://github.com/HTTP-APIs/hydra-python-agent-gui). Reference implementation is [Heracles.ts](https://github.com/HydraCG/Heracles.ts). Redis is used to store the graphical representation of content in a Data API. To query the stored data OpenCypher is employed. Below you'll find the in-depth analysis of Hydra Python Agent.

## Agent Code Analysis

Code shown below in general aids in providing GET, POST, PUT, DELETE CRUD interface to interact with Hydrus. Along with the functions handling CRUD, it also has some functions responsible for processing socket events which are not discussed on this page, but you can find them [here](https://github.com/HTTP-APIs/hydra-python-agent/blob/master/hydra_agent/agent.py).

### Fetching API DOC

The code shown below is used to fetch API Doc from the server. This fetched document is then parsed using the `doc_maker` tool. The `doc_maker` tool (form [hydra python core](https://github.com/HTTP-APIs/hydra-python-core)) is used for separating the endpoints(`collection` and `classes` endpoints) and to find its `supportedProperty`, `supportedOperations` and anything else which can get from the API documentation.

```python
def fetch_apidoc(self) -> dict:
    if hasattr(self, 'api_doc'):
        return self.api_doc 
    else:
        jsonld_api_doc = super().get(self.entrypoint_url + '/vocab').json()
        self.api_doc = doc_maker.create_doc(jsonld_api_doc)
        return self.api_doc 
```

### Agent Initialization

The code shown below is used to initialize Hydra python agent with some defaults. It is also the place where we use the `fetch_apidoc` method discussed above.

```python
def __init__(self, entrypoint_url: str, namespace: str='/sync') -> None:
    """Initialize the Agent
    :param entrypoint_url: Entrypoint URL for the hydrus server
    :param namespace: Namespace endpoint to listen for updates
    :return: None
    """
    self.entrypoint_url = entrypoint_url.strip().rstrip('/')
    self.redis_proxy = RedisProxy()
    self.redis_connection = self.redis_proxy.get_connection()
    Session.__init__(self)
    self.fetch_apidoc()
    self.initialize_graph()
    self.graph_operations = GraphOperations(self.entrypoint_url,
                                            self.api_doc,
                                            self.redis_proxy)
    # Declaring Socket Rules and instaciating Synchronization Socket
    socketio.ClientNamespace.__init__(self, namespace)
    socketio.Client.__init__(self, logger=True)
    socketio.Client.register_namespace(self, self)
    socketio.Client.connect(self, self.entrypoint_url,
                            namespaces=namespace)
    self.last_job_id = ""
```

### Graph Initialization

The method displayed below is used to initialise redis graph based on API DOC submitted to hydrus server.

```python
def initialize_graph(self) -> None:
    """Initialize the Graph on Redis based on ApiDoc
    :param entrypoint_url: Entrypoint URL for the hydrus server
    :return: None
    """
    self.graph = InitialGraph()
    self.redis_connection.delete("apigraph")
    self.graph.main(self.entrypoint_url, self.api_doc, True)
    self.redis_connection.sadd("fs:url", self.entrypoint_url)
```

### GET

The Code shown below is used to make a `GET` request to Hydrus server/ cached Redis. Actually, the graph is loaded in parts. When we query all the endpoints or class/collection endpoints they are generally loaded directly from Redis cached memory at the time request is made with the help of resource URL. But when we query members or member's property they are first fetched from server to Redis memory and then exact same process is followed. In order to query data from redis memory OpenCypher is used. In case you want to know more about `querying`, Below you will find a full section dedicated to it. Hope it will clear your doubts, in case you have any.

```python
def get(self, url: str = None, resource_type: str = None,
        filters: dict = {},
        cached_limit: int = sys.maxsize) -> Union[dict, list]:
    """READ Resource from Server/cached Redis
    :param url: Resource URL to be fetched
    :param resource_type: Resource object type
    :param filters: filters to apply when searching, resources properties
    :param cached_limit : Minimum amount of resources to be fetched
    :return: Dict when one object or a list when multiple targerted objects
    """
    redis_response = self.graph_operations.get_resource(url, resource_type,
                                                        filters)
    if redis_response:
        if type(redis_response) is dict:
            return redis_response
        elif len(redis_response) >= cached_limit:
            return redis_response

    # If querying with resource type build url
    # This can be more stable when adding Manages Block
    # More on: https://www.hydra-cg.com/spec/latest/core/#manages-block
    if resource_type:
        url = self.entrypoint_url + "/" + resource_type + "Collection"
        response = super().get(url, params=filters)
    else:
        response = super().get(url)

    if response.status_code == 200:
        # Graph_operations returns the embedded resources if finding any
        embedded_resources = \
            self.graph_operations.get_processing(url, response.json())
        self.process_embedded(embedded_resources)
        if response.json()['@type'] in self.api_doc.parsed_classes:
            return response.json()
        else:
            return response.json()['members']
    else:
        return response.text
```

### PUT

Code shown below is used to make a PUT request to hydrus server. We use `PUT` request to create a new object.

```python
def put(self, url: str, new_object: dict) -> Tuple[dict, str]:
    """CREATE resource in the Server/cache it on Redis
    :param url: Server URL to create the resource at
    :param new_object: Dict containing the object to be created
    :return: Dict with server's response and resource URL
    """
    response = super().put(url, json=new_object)

    if response.status_code == 201:
        url = response.headers['Location']
        # Graph_operations returns the embedded resources if finding any
        embedded_resources = \
            self.graph_operations.put_processing(url, new_object)
        self.process_embedded(embedded_resources)
        return response.json(), url
    else:
        return response.text, ""
```

### POST

Code shown below is used to make POST request. We use `POST` request to update any existing object.

```python
def post(self, url: str, updated_object: dict) -> dict:
    """UPDATE resource in the Server/cache it on Redis
    :param url: Server URL to update the resource at
    :param updated_object: Dict containing the updated object
    :return: Dict with server's response
    """
    response = super().post(url, json=updated_object)

    if response.status_code == 200:
        # Graph_operations returns the embedded resources if finding any
        embedded_resources = \
            self.graph_operations.post_processing(url, updated_object)
        self.process_embedded(embedded_resources)
        return response.json()
    else:
        return response.text
```

### DELETE

Code shown below is used to make `DELETE` request to hydrus server.

```python
def delete(self, url: str) -> dict:
    """DELETE resource in the Server/delete it on Redis
    :param url: Resource URL to be deleted
    :return: Dict with server's response
    """
    response = super().delete(url)

    if response.status_code == 200:
        self.graph_operations.delete_processing(url)
        return response.json()
    else:
        return response.text
```

That's all for the basic walkthrough over the code. If you want to know more. It is recommended that you visit the [codebase](https://github.com/HTTP-APIs/hydra-python-core) and [GUI implementation](https://github.com/HTTP-APIs/hydra-python-agent-gui) for even better understanding.

## Redis as a graph based storage

The main motive behind using redis was to implement it as a graph database to establish fast querying process for the hydra client.

### Graph Structure

The graph structure is the important part of implementing Redis because graph structure determines how API structure and data stored in the Redis in graphical form.

Redisgraph is using to create the nodes and edges. Required data is usually stored in the node properties.

The graph structure is based on the endpoints of the server. The creation of the entire graph structure starts from the `Hydra: Entrypoint` (which we obtain when we parse API doc with the help of `doc_maker` tool during initialization) and it considers every object whether endpoint or a non-endpoint simply as a node.

The graph structure has two types of endpoints:
- `collection_endpoint`
- `class_endpoint`

Every collection endpoint contains the collections of endpoints("members") which stores as a node in the Redis graph and the "members" of collection endpoint are stored in a dictionary(Python `dict`), every member contains the data that we have fetched from the server. Ex: In a `DroneCollection` node, the label is "collection" and alias is "DroneCollection"; and properties is a dictionary(Python `dict`) which stores all the members for the endpoint named `DroneCollection`.

`doc-maker` tool is used for separating the endpoints("collection" and "classes" endpoints) and finding its `supportedProperty`, `supportedOperations` and all the other things which can get from the API documentation.

The graph structure have five types of nodes in graph with five different labels:
- label = "id"   (used for Entrypoint node)
- label = "classes"    (used for class_endpoints nodes)
- label = "collection"    (used for collection_endpoints nodes ex- DroneCollection)
- label = "objects"     (used for the endpoint or member of collection endpoint ex-Drone2)
- label = "object"     (used for the non-endpoint objects ex- State or Drone State)

All the same label nodes have different alias or key which gives them an identity within the group also.
The Redis graph has an edge between a different label and in the same label also.
Example- every class label or collection label should have an edge with id label and every object's label has an edge with a collection label. Now objects label can have an edge with object label as well as with the class label and there is also a chance that classes label can have an edge with the classes label as well as with the object label.

Ex: Simple Diagram for the graph(how it is connected):

Lets the initial node is "Entrypoint" and "ControllerLogCollection", "DroneLogCollection","DroneCollection", "DatastreamCollection", "CommandCollection", "AnomalyCollection" and "MessageCollection" are the collection endpoints and "Location" is a class endpoint. "Drone2" is a member of `DroneCollection` endpoint and "Drone2State" is a non-endpoint object(property) of `Drone2`.

So, the graph is:

![example-graph](static/hydra_graph.gv-1.png)

The diagram shown above must give an idea that how to graph nodes can be connected.

Here is a [documentation of graph implementation](https://medium.com/@sandeepsajan0/documentation-for-hydra-graph-cd9b2bd84884). There is a good explanation, how data and other properties are stored in the graph and how the graph is stored in Redis.

### Querying Mechanism

Retrieval of data from the Redis Memory requires a proper querying mechanism. OpenCypher is the querying language to retrieve data from the graph.

Actually here, the graph is loaded by parts. At first, the initial sub-graph should be load with the help of URL provided by the user which contains only the endpoints, class endpoints and collection endpoints in it. But if a user wants to access the members of any collection or value of properties of class and collection endpoints then another part of the graph should be load 

Ex: At first the user gives `URL`, and the initial sub-graph should be load in Redis. Now, if a user queries for `DroneCollection members` then another part of the graph should be a load that contains all the members and properties of members of DroneCollection endpoint.

Similarly, other parts of the graph should be loaded in Redis. The user can query for that in [querying format](https://github.com/HTTP-APIs/python-hydra-agent/blob/develop/hydra_redis/querying_mechanism.py#L617).

__How to query?__

There are several types of queries:
1. User can query for all the endpoints.
2. User can query for class endpoints as well as collection endpoints separately.
3. User can query for members of any collection endpoint.
4. User can query for members' properties and also for its values of any collection endpoint. Ex: objectsDrone properties
5. User can query for properties and values of any class endpoint.
6. User also can query with property and value or by comparison in properties. Ex: name Drone1 and model xyz, here name and model are properties and Drone1 and xyz are these values.

Example for the complex query(type: comparison of properties):
User should use brackets in these type of query in which both `and` and `or` operations are present, to differentiate between the `and` and `or` operations like: `a and b and ((c or d or e) and f)`.

__How agent executes query?__

To query 1 & 2, the agent uses the OpenCypher and simply fetches the data from the Redis because that data has stored at the time URL was provided by the user.

And for querying members or members' properties, the agent should get the data from the server once with the help of given url and stored it in Redis. After that it is similar to the above case, use OpenCypher query to retrieve required data from Redis. And a similar thing is to happen for the properties and values of the class endpoint.

For the last type of query i.e Number 6, the agent uses some special type of indexing.

Ex: if property is "model" and its value is "xyz" for id "/api/DroneCollection/2". then its indexing be like `fs:model:xyz = /api/DroneCollection/2`.

So, these types of indexing make retrieval of data from the Redis easier. This type of indexing is also called the __faceted indexing__.

Faceted indexing is using here especially for a query type: comparison of properties.

Example how client execute the complex query(contain combine `and` and `or`):
First, the client will search for brackets and break the brackets part into the partial query. Executes the partial queries and store its data in the randomly generated key. It a recursive process, run until all brackets over. After execution of all partial queries now query becomes simpler only with a type of operation. Now, the client executes simple query and the user gets the desired result.

query = `a and b and ((c or d or e) and f)`
first step => query = `a and b and (c:d:e and f)`
second step => query = `a and b and c:d:e:f`
After second step, query becomes simple and have only a type of operation `and`. And `c:d:e` and `c:d:e:f` are random keys for `c or d or e` and `c:d:e and f` respectively.

### Worth Knowing

__Faceted Indexing__ is used to handle complex queries like cobination of `and` and `or` queries or the queries which can be done only with the help of properties. An example to demonstrate how faceted indexing helps the agent:

Let a "DroneCollection" member `/api/DroneCollection1` have `properties: {name:Drone1, model:xyz, MaxSpeed:250}` then agent storing these using faceted indexing like: `fs:name:Drone1 = /api/DroneCollection1`, `fs:model:xyz = /api/DroneCollection1` and `fs:MaxSpeed:250 = /api/DroneCollection1`(where `fs:{key}:{value}` is a set which can have the many values like `/api/DroneCollection1`,`/api/DroneCollection2`...). And the same method is use for the other member's properties.

So, now if the user query for all `model` with value `xyz` then the agent will return the value of set `fs:model:xyz`. And similarly, the agent works for other these type of queries.