# Redis as a graph database for Hydra Agent

The aim is to implement Redis as a graph database for fast querying process for the hydra client.

## Graph structure 

The graph structure is the important part of implementing Redis because graph structure determines how API structure and data stored in the Redis in graphical form.

Redisgraph is using to create the nodes and edges. Required data is stored in the node properties.

The graph structure is based on the endpoints of the server.
The creation of entire graph structure starts from the `Hydra:Entrypoint` and it considers every object (both endpoint or non-endpoint) as a node.

The graph structure has two types of endpoints:
- `collection_endpoint`
- `class_endpoint`

Every collection endpoint contains the collections of endpoints("members") which stores as a node in Redis graph and the "members" of collection endpoint are stored in a dictionary(Python `dict`), every member contains the data that we have fetched from the server. Ex: In a `DroneCollection` node, label is "collection" and alias is "DroneCollection"; and properties is a dictionary(Python `dict`) which stores all the members for the endpoint named `DroneCollection`.

hydrus(`Hydrus.hydraspec.doc_maker`) functionality is used for seperating the endpoints("collection" and "classes" endpoints) and finding its  `supportedProperty` or `supportedOperations` and all the other things which can get from API documentation.

The graph structure have five types of nodes in graph with five different labels:
- label = "id"   (it is used for Entrypoint node)
- label = "classes"    (it is used for class_endpoints nodes)
- label = "collection"    (it is used for collection_endpoints nodes ex- DroneCollection)
- label = "objects"     (it is used for the endpoint or member of collection endpoint ex-Drone2)
- label = "object"     (It is used for the non-endpoint objects ex- State or Drone State)

All the same label nodes have different alias or key which gives them identity with the group also.
The Redis graph has an edge between a different label and in the same label also.
Example- every classes label or collection label should have an edge with id label and every object's label has an edge with collection label and now objects label can have an edge with object label as well as with the classes label and there is also a chance that classes label can have an edge with the classes label as well as with the object label.

Ex: Simple Diagram for the graph(how it is connected):

Lets the initial node is "Entrypoint" and "ControllerLogCollection", "DroneLogCollection","DroneCollection", "DatastreamCollection", "CommandCollection", "AnomalyCollection" and "MessageCollection" are the collection endpoints and "Location" is a class endpoint. "Drone2" is a member of `DroneCollection` endpoint and "Drone2State" is a non-endpoint object(property) of `Drone2`.

So, the graph is:

![example-graph](static/hydra_graph.gv-1.png)

Above is an idea that how graph nodes can be connected in the graph.

Here is a [documentation of graph implementation](https://medium.com/@sandeepsajan0/documentation-for-hydra-graph-cd9b2bd84884). There is a good explanation, how data and other properties are stored in the graph and how the graph is stored in Redis.

## Querying Mechanism

Querying mechanism is used for retrieve the data from the Redis memory. OpenCypher is the querying language to retrieve data from the graph.

Actually here, graph is loaded by parts. At first, initial sub-graph should be load with the help of url provided by user which contains only the endpoints, class endpoints and collection endpoints in it. But if user wants to access the members of any collection or value of properties of class and collection endpoints then other part of graph should be load 

Ex: At first user gives `url`, and initial sub-graph should be load in Redis. Now, if user query for `DroneCollection members` then another part of graph should be load which contains all the members and properties of members of DroneCollection endpoint.

Similarly, other parts of graph should be loaded in Redis. The user can query for that in [querying format](https://github.com/HTTP-APIs/python-hydra-agent/blob/develop/hydra_redis/querying_mechanism.py#L617).

### How to query

There are several types of queries:
- User can query for all the endpoints.
- User can query for class endpoints as well as collection endpoints seperately.
- User can query for members of any collection endpoint.
- User can query for members's properties and also for its values of any collection endpoint. Ex: objectsDrone properties
- User can query for properties and its values of any class endpoint.
- User also can query with property and value or by comparision in properties. Ex: name Drone1 and model xyz, here name and model are properties and Drone1 and xyz are these values.

Example for the complex query(type: comparison of properties):
User should use brackets in these type of query in which both `and` and `or` operations are present, to differentiate between the `and` and `or` operations like: `a and b and ((c or d or e) and f)`.

### How agent execute query

For above first two's, agent use the OpenCypher and simply fetch the data from the Redis because thats data has stored at the time of url given by user.

And for querying members or members's properties, agent should get the data from the server once with the help of given url and stored it in Redis. After that it is similar to above case, use OpenCypher query to retrieve required data form Redis. And the similar thing is happen for the properties and its values of class endpoint.

But for last one type of query, agent uses some special type of indexing.

Ex: if property is "model" and its value is "xyz" for id "/api/DroneCollection/2". then its indexing be like `fs:model:xyz = /api/DroneCollection/2`.

So, these type of indexing make easier to retrieve data from the Redis. Thats type of indexing also called the faceted indexing.

Faceted indexing is using here especially for a query type: comparison of properties.

Example how client execute complex query(contain combine `and` and `or`):
First, client will search for brackets and break the brackets part into partial query. Executes the partial queries and store its data in the random generated key. It a recursive process, run until all brackets over. After execution of all partial queries now query become simpler only with a type of operation. Now, client executes simple query and user gets the desired result.

query = `a and b and ((c or d or e) and f)`
first step => query = `a and b and (c:d:e and f)`
second step => query = `a and b and c:d:e:f`
After second step, query becomes simple and have only a type of operation `and`. And `c:d:e` and `c:d:e:f` are random keys for `c or d or e` and `c:d:e and f` respectively.


### Faceted index

Faceted Indexing is used to handle complex queries like `and` and `or` queries or the queries which can be done only with the help of properties. Example how faceted indexing helps the agent:

Let a "DroneCollection" member `/api/DroneCollection1` have `properties: {name:Drone1, model:xyz, MaxSpeed:250}` then agent storing these using faceted indexing like: `fs:name:Drone1 = /api/DroneCollection1`, `fs:model:xyz = /api/DroneCollection1` and `fs:MaxSpeed:250 = /api/DroneCollection1`(where `fs:{key}:{value}` is a set which can have the many values like `/api/DroneCollection1`,`/api/DroneCollection2`...). And the same method is use for the other member's properties.

So, now if user query for all `model` with value `xyz` then agent will return the value of set `fs:model:xyz`. And similarly, agent works for other these type of queries.

---
* [Back to Index](README.md)
