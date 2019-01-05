---
layout: page
title: Explained by example | Hydraecosystem.org
---

# Explained by example

## Small simulation
A *Web API featuring a flock of drones* will be used to illustrate how Hydra Documentation can
be created for hydrus.
Basic rules for this simulation are:
* a flock of drones have as objective to detect the presence of fires or abnormal heat spots in a given geographical area using an infrared sensors;
* a central controller will be able to start or stop drones and send orders to them;
* all active drones submit their status updates every 15 seconds to the central controller.
And much more, head over to [demo wiki](https://github.com/HTTP-APIs/hydra-flock-demo/wiki) for more information about the demo.

The exemplary Web API has to expose representations for drones, datastreams, commands, states, messages, log entries and areas. To enable interaction with those resources, a client has to know which operations the server supports. In human-facing websites such affordances are typically exposed by links and forms and described in natural language, machines cannot interpret such information easily. The solution is to reduce the language to a small number of unambiguous concepts which are easily recognizable by Web API client. Hydra formalizes such concepts.

## Hyperlinks and semantic annotations
The simplest and most important affordance on the Web are *hyperlinks*. Without them, it would be impossible to browse the Web. Users typically select the link based on the text it is labeled with. To give machines a similar understanding, links can be *annotated with a link relation* type — a registered token or a URI identifying the semantics of the link. 
The following example shows how such a typed link is used in HTML to reference a stylesheet.

#### EXAMPLE 1: A typed link referencing a stylesheet as used in HTML
Here a basic example of an hyperlink to another resource very common in every Web page:
```
<link rel="stylesheet" href="http://www.example.com/styles.css" />
```
Linked Data allows to annotate the "quality" or "type" or "kind" of the objet referenced by using the link. An example in JSON-LD would thus look as follows.

#### EXAMPLE 2: Referencing a stylesheet in JSON-LD
```
{
  "urn:iana:link-relations:stylesheet": { "@id": "http://www.example.com/styles.css" }
}
```

Generally, a client decides whether to follow a link or not based on the link relation (or property in the case of Linked Data) which defines its semantics (its meaning or "quality" in the sense of "what it is"). There are however also clients such as Web crawlers which simply follow every link intended to be dereferenced. In HTML this usually means that all links in anchor elements (the `<a>` tag) are followed but most references in link elements (the `<link>` tag), such as used in the example above, are ignored. 

Since in RDF serializations no such distinction exists, the best a client can do is to blindly try to dereference all URIs. It would thus be beneficial to describe in a machine-readable manner if a property represents a link intended to be dereferenced or solely an identifier. Hydra's Link class does just that. It can be used to define properties that represent dereferenceable links. In the exemplary Web API used throughout this section, it can be used to define a property linking entrypoint to different collections as follows.

#### EXAMPLE 3: Defining properties representing hyperlinks using Hydra's Link class
```
{
  "context":
  {
    ...
    "vocab": "http://localhost:8080/api/vocab#"
    ...
  }
  ......
  ......
  "hydra:description": "The DroneCollection collection",
  "hydra:title": "dronecollection",
  "property": {
      "@id": "vocab:EntryPoint/DroneCollection",
      "@type": "hydra:Link",
      "description": "The DroneCollection collection",
      ...
      ...
      }
}
```
In the example above `vocab:EntryPoint/DroneCollection` will resolve to `http://localhost:8080/api/vocab#EntryPoint/DroneCollection` and a property identified with this is defined to be of the type Link. This is enough information for a client understanding Hydra to know that the value of the `DroneCollection` property in the following example is intended to be dereferenced.

While links are enough to build read-only Web APIs, more powerful affordances are required to build read-write Web APIs. 
Thus, Hydra introduces the notion of operations. Simply speaking, an operation represents the information necessary for a 
client to construct valid HTTP requests in order to manipulate the server's resource state. As such, the only required
property of an operation is its HTTP method. Optionally, it is also possible to describe what information the server expects 
or returns, including additional information about HTTP status codes that might be returned. This helps developers to 
understand what to expect when invoking an operation. This information has, however, not to be considered as being complete;
it is merely a hint. Developers should, e.g., expect that other HTTP status codes might be returned and program their clients
accordingly.

#### EXAMPLE 4: A representation of a drone augmented with a post(update) operation
```
{     
       "context": link_to_context_object,
       .....
       .....
            "@id": "vocab:Drone",
            "@type": "hydra:Class",
            "description": "Class for a drone",
            "supportedOperation": [
                {
                    "@type": "http://schema.org/UpdateAction",
                    "expects": "vocab:Drone",
                    "method": "POST",
                    "possibleStatus": [
                        {
                            "description": "Drone updated",
                            "statusCode": 200
                        }
                    ],
                    "returns": "null",
                    "title": "SubmitDrone"
                },
                ....
                other supported operations like get, put, etc.
                ....
                ]
}
```

The example above references Hydra's context to map properties such as operation and method and values like `UpdateAction`
to URLs that unambiguously identify these concepts. It would be similarly valid JSON-LD if these mappings would be directly 
embedded into the representation or if the full URLs would be used instead. Typically, however, the context is the same for
a lot of representations in a Web API and it thus makes sense to reduce the response size by leveraging a remote context 
that can easily be cached by a client.

## Writing Hydra API Documentation for Hydrus

In Web APIs, most representations are typically very similar. Furthermore, resources often support the same operations. 
It thus makes sense, to collect this information in a central documentation. Traditionally, this has been done in natural 
language which forces developers to hardcode that knowledge into their clients. Hydra addresses this issue by making the 
documentation completely machine-processable. The fact that all definitions can be identified by URLs enables reuse at 
unprecedented granularity (some sort of intermediate tool is OpenAPI which allows human-readable documentation to be automatically generated by well-formatted data structures).

Hydra's `ApiDocumentation` class builds the foundation for the description of a Web API. As shown in the following example, 
Hydra describes a API by giving it a title, a short description, and documenting its main entry point. Furthermore, the 
classes known to be supported by the Web API and additional information about status codes that might be returned can be 
documented. This information may be used to automatically generate documentations in natural language.

#### EXAMPLE 5: The overall structure of a Hydra API documentation
```
{
  "@context": {...},
  "@id": "http://localhost:8080/api/vocab",
  "@type": "ApiDocumentation",
  "description": "API Documentation for the server side system",
  "title": "Drone Flock",
  "entrypoint": main_entry_point_of_API
  "supportedClass": [
    ... Classes known to be supported by the Web API ...
  ],
  "possibleStatus": [
    ... Statuses that should be expected and handled properly ... 
  ]
}
```

In Linked Data properties are, just as everything else, identified by IRIs and thus have global scope which implies that 
they have independent semantics. In contrast, properties in data models as used in common programming languages are 
class-dependent. Their semantics depend on the class they belong to. In data models classes are typically described by the 
properties they expose whereas in Linked Data properties define to which classes they belong. If no class is specified, it
is assumed that a property may apply to every class.

These differences have interesting consequences. For example, the commonly asked question of which properties can be applied 
to an instance of a specific class can typically not be answered for Linked Data. Strictly speaking, any property which is 
not explicitly forbidden could be applied. This stems from the fact that Linked Data works under an open-world assumption 
whereas data models used by programmers typically work under a closed-world assumption. The difference is that when a closed 
world is assumed, everything that is not known to be true is false or vice-versa. With an open-world assumption the failure
to derive a fact does not automatically imply the opposite; it embraces the fact that the knowledge is incomplete.

Hydra classes are dereferenceable resources (see [definition](http://dbpedia.org/page/Dereference_operator)).

Since Hydra uses classes to describe the information expected or returned by an operation, it also defines a concept to 
describe the properties known to be supported by a class. The following example illustrates this feature. Instead of 
referencing properties directly, `supportedPropert`y references an intermediate data structure, namely instances of the 
`SupportedProperty` class. This makes it possible to define whether a specific property is required or whether it is read-only or write-only depending on the class it is associated with.

#### EXAMPLE 6: Defining a class and documenting its supported properties
```
{
  "@context": {...},
  "@id": "vocab:Drone",
  "@type": "hydra:Class",
  "description": "Class for a drone",
  "supportedProperty": [
        {
            "@type": "SupportedProperty",
            "property": "vocab:State",
            "readonly": "false",
            "required": "true",
            "title": "DroneState",
            "writeonly": "false"
        },
        {
            "@type": "SupportedProperty",
            "property": "http://schema.org/name",
            "readonly": "false",
            "required": "true",
            "title": "name",
            "writeonly": "false"
        },
        {
            "@type": "SupportedProperty",
            "property": "http://schema.org/model",
            "readonly": "false",
            "required": "true",
            "title": "model",
            "writeonly": "false"
        },
        {
            "@type": "SupportedProperty",
            "property": "http://auto.schema.org/speed",
            "readonly": "false",
            "required": "true",
            "title": "MaxSpeed",
            "writeonly": "false"
        },
        {
            "@type": "SupportedProperty",
            "property": "http://schema.org/device",
            "readonly": "false",
            "required": "true",
            "title": "Sensor",
            "writeonly": "false"
        }
    ],
    "title": "Drone"
}
```

All instances of a specific class typically support the same operations. Hydra therefore features a `supportedOperation` 
property which defines the operations supported by all instances of a class.

#### EXAMPLE 7: Defining a class and documenting its supported operations
```
{
"@id": "vocab:Command",
"@type": "hydra:Class",
"description": "Class for drone commands",
"supportedOperation": [
    {
        "@type": "hydra:Operation",
        "expects": "null",
        "method": "GET",
        "possibleStatus": [
            {
                "description": "Command not found",
                "statusCode": 404
            },
            {
                "description": "Command Returned",
                "statusCode": 200
            }
        ],
        "returns": "vocab:Command",
        "title": "GetCommand"
    },
    {
        "@type": "http://schema.org/AddAction",
        "expects": "vocab:Command",
        "method": "PUT",
        "possibleStatus": [
            {
                "description": "Command added",
                "statusCode": 201
            }
        ],
        "returns": "null",
        "title": "AddCommand"
    },
    few more operations
    ....
 }
 ```
 
 The same feature can be used to describe the operations supported by values of a Link property. This is often helpful when 
 certain operations depend on the permissions of the current user. It makes it, e.g., possible to show a "delete" link only 
 if the current user has the permission to delete the resource. Otherwise, the link would simply be hidden in the 
 representation.

#### EXAMPLE 8: Documenting the supported operations of link properties

```
{
    "hydra:description": "The DatastreamCollection collection",
    "hydra:title": "datastreamcollection",
    "property": {
        "@id": "vocab:EntryPoint/DatastreamCollection",
        "@type": "hydra:Link",
        "description": "The DatastreamCollection collection",
        "domain": "vocab:EntryPoint",
        "label": "DatastreamCollection",
        "range": "vocab:DatastreamCollection",
        "supportedOperation": [
            {
                "@id": "_:_:datastream_collection_retrieve",
                "@type": "hydra:Operation",
                "description": "Retrieves all Datastream entities",
                "expects": "null",
                "method": "GET",
                "returns": "vocab:DatastreamCollection",
                "statusCodes": []
            },
            {
                "@id": "_:_:datastream_create",
                "@type": "http://schema.org/AddAction",
                "description": "Create new Datastream entitity",
                "expects": "vocab:Datastream",
                "method": "PUT",
                "returns": "vocab:Datastream",
                "statusCodes": [
                    {
                        "description": "If the Datastream entity was created successfully.",
                        "statusCode": 201
                    }
                ]
            }
        ]
    },
    "readonly": "true",
    "required": "null",
    "writeonly": "false"
}
```

Keep in mind that operations specified in an `ApiDocumentation` may fail at runtime as either resources or the `ApiDocumentation` itself have changed since they have been retrieved. A simple strategy to try to recover from such an error is to reload the `ApiDocumentation`. The feature of being able to know any change in the API in real-time by reading the documentation file is a typical advantage of using Hydra-aware cliens/servers networks. This implies the possibility of updating the behaviour of clients by simply updating the servers' documentation, without the need of any hard-coding on the client side.

### Collections

In many situations, it makes sense to expose *resources that reference a set* of somehow related resources. 
Results of a search query or entries of an address book are just two examples. To simplify such use cases, Hydra defines the
two classes `hydra:Collection` and `hydra:PartialCollectionView`.

A `hydra:Collection` can be used to reference a set of resources as follows:

#### EXAMPLE 9: Referencing related resources using a Hydra Collection
```
{
    "@id": "vocab:DroneCollection",
    "@type": "hydra:Class",
    "description": "A collection of drone",
    "subClassOf": "http://www.w3.org/ns/hydra/core#Collection",
    "supportedOperation": [
        {
            "@id": "_:drone_collection_retrieve",
            "@type": "hydra:Operation",
            "description": "Retrieves all Drone entities",
            "expects": "null",
            "method": "GET",
            "returns": "vocab:DroneCollection",
            "statusCodes": []
        },
        {
            "@id": "_:drone_create",
            "@type": "http://schema.org/AddAction",
            "description": "Create new Drone entitity",
            "expects": "vocab:Drone",
            "method": "PUT",
            "returns": "vocab:Drone",
            "statusCodes": [
                {
                    "description": "If the Drone entity was created successfully.",
                    "statusCode": 201
                }
            ]
        }
    ],
    "supportedProperty": [
        {
            "@type": "SupportedProperty",
            "description": "The drone",
            "property": "http://www.w3.org/ns/hydra/core#member",
            "readonly": "false",
            "required": "false",
            "title": "members",
            "writeonly": "false"
        }
    ],
    "title": "DroneCollection"
}
```

As shown in the example above, member items can either consist of solely a link or also include some properties. 
In some cases embedding member properties directly in the collection is beneficial as it may reduce the number of HTTP 
requests necessary to get enough information to process the result.

### How hydrus uses RDF via hydrus to make data exchanges automated

To understand how [hydrus](https://github.com/HTTP-APIs/hydrus)(our official Web server implementation) represents REST resources and how developers are helped to work with Hydra, it is possible to start from thinking at Hydra as generic framework that describes REST API resources to make data exchanges automated.

Instances (objects) belonging to a Resource are named Items in hydrus. It is possible to perform HTTP operations over Items. At a lower layer the REST Resource is of a kind of an hydra:Resource, all the objects of the same kind are members of an hydra:Collection. Hydrus use Hydra specified API documentaton and as Hydra inherits from RDF, thanks to the framework it is possible to represent the API as a RDF graph.

hydrus allows the developer to take advantage of this powerful description by abstracting away the complexity of RDF and to work on the REST interface layer. This multi-layered architecture allows REST APIs to work with automated clients and leverage new powerful ways of querying the data.

To learn more about ecosystem design, follow [this document](https://github.com/HTTP-APIs/hydra-ecosystem-wiki/blob/master/Design.md)

NOTE: This document is modified version of [Markus Lanthaler](https://github.com/lanthaler)'s original document describing how to create Hydra specified APIs.For more info follow [hydra core vocabulary specification](https://www.hydra-cg.com/spec/latest/core/)

---

