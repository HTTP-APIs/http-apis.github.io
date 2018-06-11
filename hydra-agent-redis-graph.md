# Redis as a graph database for Hydra Client

The aim is to implement Redis as a graph database for fast querying process for the hydra client.

## Graph structure 

The graph structure is the important part of implementing Redis because graph structure determines how API structure and data stored in the Redis in graphical form.

Redisgraph is using to create the nodes and edges. Required data is stored in the node properties.

The graph structure is based on the endpoints of the server.
The creation of entire graph structure starts from the `Entrypoint` and it considers every object ( endpoint or non-endpoint both) as a node.

The graph structure has two types of endpoints:
- `collection_endpoint`
- `class_endpoint`

Every collection endpoint contains the collections of endpoints which stores as a node in Redis graph and Redis graph nodes also have a part property in which node contains the data fetches from the server endpoint or the properties or operation for the particular endpoint.

Hydrus(`Hydrus.hydraspec.doc_maker`) is using for finding the endpoints and `supportedProperty` or `supportedOperations` and all the other things which can get from API documentation.

The graph structure have five types of nodes in graph with five different labels:
- label = "id"   (it is used for Entrypoint node)
- label = "classes"    (it is used for class_endpoints nodes)
- label = "collection"    (it is used for collection_endpoints nodes ex- DroneCollection)
- label = "objects"     (it is used for the endpoint or member of collection endpoint ex-Drone11)
- label = "object"     (It is used for the non-endpoint objects ex- State or Drone State)

All the same label nodes have different alias or key which gives them identity with the group also.
The Redis graph has an edge between a different label and in the same label also.
Example- every classes label or collection label should have an edge with id label and every object's label has an edge with collection label and now objects label can have an edge with object label as well as with the classes label and there is also a chance that classes label can have an edge with the classes label as well as with the object label.
Above is an idea that how graph nodes can be connected in the graph

Here is a [documentation of graph implementation](https://medium.com/@sandeepsajan0/documentation-for-hydra-graph-cd9b2bd84884). There is a good explanation, how data and other properties are stored in the graph and how the graph is stored in Redis.

