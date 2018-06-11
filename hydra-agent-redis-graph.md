# Redis as a graph database for Hydra Client

The aim is to implement Redis as a graph database for fast querying process for the hydra client.

## Graph structure 

The graph structure is the important part for implementing Redis because graph structure determines how API structure and data stored in the Redis in graphical form.

Redisgraph is using for create the nodes and edges. Required data is stored in the node properties.

The graph structure is based on the endpoints of the server.
The creation of entire graph structure starts from the Entrypoint and it consider every objects( endpoint or non-endpoint both) as a node.

The graph structure have two types of endpoints:
  collection_endpoint
  class_endpoint

Every collection endpoint contain the collections of endpoints which stores as a node in Redis graph and Redis graph nodes also have a part properties in which node contains the data fetches from the server endpoint or the properties or operation for the particular endpoint.

hydrus(`hydrus.hydraspec.doc_maker`) is using for finding the endpoints and supportedProperty or supportedOperations and all the other things which can be get from API documentation.

The graph structure have five types of nodes in graph with five different labels:
1. label = "id"   (it is used for Entrypoint node)
2. label = "classes"    (it is used for class_endpoints nodes)
3. label = "collection"    (it is used for collection_endpoints nodes ex- DroneCollection)
4. label = "objects"     (it is used for the endpoint or member of collection endpoint ex-Drone11)
5. label = "object"     (It is used for the non-endpoint objects ex- State or Drone State)

All the same label nodes have different alias or key which gives them identity with the group also.
The redis graph has an edge between different label and in the same label also
example- every classes label or collection label should have an edge with id label and every objects label has an edge with collection label and now objects label can has an edge with object label as well as with the classes label and there is also a chance that classes label can has an edge with the classes label as well as with the object label.
Above is an idea that how graph nodes can be connected in graph

Here is an [documentation of graph implementation](https://medium.com/@sandeepsajan0/documentation-for-hydra-graph-cd9b2bd84884). There is a good explanation, how data and other properties are stored in graph and how graph is stored in Redis.

