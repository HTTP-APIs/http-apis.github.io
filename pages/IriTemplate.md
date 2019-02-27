---
layout: page
title: IriTemplate explanation with an example | Hydraecosystem.org
permalink: /IriTemplate
---
# IriTemplate explained with an example

>**Note**: *This article uses term URI and IRI interchangebly, IRIs being genaralized form of URIs supporting Unicode. (For 
 more information see [rfc for URI](https://tools.ietf.org/html/rfc3986) and [rfc for IRI](https://www.ietf.org/rfc/rfc3987.txt))*

IRI Templates provide an easy and elegant way to describe a range of IRIs with help of variable expansion.
In context of hypermedia driven APIs IRI templates are particularly useful when the server can't construct a URI 
by itself; only the client possess the required information to construct desired IRI.

Hydra provides `IriTemplate` class which can be used to provide IRI template to smart clients, which can be used
by those clients to construct valid IRIs. As the title of this article suggest we will use an example to explain
working of `IriTemplate` in
detail.

### Example
```
{
    "@context": "/serverapi/context.jsonld",
    "@id": "https://tiles.openplanner.team/planet",
    "@type": "Collection",
    "search": {
        "@type": "IriTemplate",
        "template": "https://c.tile.openstreetmap.org/{z}/{x}/{y}.examplejsonld",
        "variableRepresentation": "BasicRepresentation",
        "mapping": [
            {
                "@type": "IriTemplateMapping",
                "variable": "x",
                "property": "tiles:longitudeTile",
                "required": true
            },
              {
                "@type": "IriTemplateMapping",
                "variable": "y",
                "property": "tiles:latitudeTile",
                "required": true
            },
              {
                "@type": "IriTemplateMapping",
                "variable": "z",
                "property": "tiles:zoomTile",
                "required": true
            }
        ]
    }
}
``` 
You can find more details related to this example [here](https://github.com/HydraCG/Specifications/issues/171)

As explained above, in tiled maps when we open a map the client side code uses some formula(the formula may vary
according to the tile numbering convention used by the service provider) which uses latitude, longitude and zoom
to get tile identifiers(here x and y). When it has value of x and y to identify a tile it makes request to the
server for that individual tile.

For example [https://c.tile.openstreetmap.org/15/22994/14232.png](https://c.tile.openstreetmap.org/15/22994/14232.png) will return the tile identified by x = 22994 and
y = 14232 with zoom 15.
For x = 22990 and y = 14232 and zoom = 15 the URI will be [https://c.tile.openstreetmap.org/15/22990/14232.png](https://c.tile.openstreetmap.org/15/22990/14232.png), 
same way we can construct URIs for different comibnations of X, Y and zoom. To represent such range of URIs we 
can use an URI template(IRI template) `https://c.tile.openstreetmap.org/{z}/{x}/{y}`.

Such IRI templates can be put in use with help of Hydra `IriTemplate` class. It consists of a literal `template` 
and a set of mappings(`IriTemplateMapping`). `template` holds the IRI template, here `https://c.tile.openstreetmap.org/{z}/{x}/{y}.examplejsonld`
and `IriTemplateMapping` maps varibles in the `template` with properties and may specify whether the variable
is required or not.

In the example above variables x, y and z maps to `tiles:longiudeTile`, `tiles:latitudeTile` and `tiles:zoomTile`
respectively. And all these variables are specified as `required` to expand the IRI template and create a valid IRI.

As the name suggests `variableRepresenation` specifies how the IRI template will be expanded and serialized when 
values of variables are provided.
As of now it can possibly have one of two values either `BasicRepresentation` or `ExplicitRepresentation`.
`BasicRepresentation` does not differentiate between literals and IRIs, it simple omits data-type and language
information of literals. While `ExplicitRepresentation` diffrentiates between literals and IRIs by surrounding
literals with double quotes(") and it also explicitly specifies language and data-type information of literals,
for more see detailed [example](http://www.hydra-cg.com/spec/latest/core/#ex-16-the-different-variable-representations).
The client side code might look like this
```js
var client = new HydraClient();
var collection = client.get("/api/planet");
if (colletion.search) {
    var filter = {};
    for (let mapping of collection.search.mappings) {
        filter[mapping.variable] = value of variable; # set value of x, y and z
    }

    var query = urlTemplate
        .parse(collection.search.template)
        .expand(filter);                              # expand the IRI
    var data = client.get(query);
    for (var member of data.members) {
        // do something with the _member_, i.e. display it
    }
}
```
With help of all these a Hydra enabled client can expand the IRI template with provided values of variables. If in
future the URI is changed from `https://c.tile.openstreetmap.org/{z}/{x}/{y}` to `https://c.tile.openstreetmap.org/{z}/{y}/{x}`
the client won't have any difficulty adjusting to it. Client will receive following kind of response from the server
```
{
    "@context": "/serverapi/context.jsonld",
    "@id": "https://tiles.openplanner.team/planet",
    "@type": "Collection",
    "search": {
        "@type": "IriTemplate",
        "template": "https://c.tile.openstreetmap.org/{z}/{y}/{x}.examplejsonld",
        "variableRepresentation": "BasicRepresentation",
        "mapping": [
            {
                "@type": "IriTemplateMapping",
                "variable": "x",
                "property": "tiles:longitudeTile",
                "required": true
            },
              {
                "@type": "IriTemplateMapping",
                "variable": "y",
                "property": "tiles:latitudeTile",
                "required": true
            },
              {
                "@type": "IriTemplateMapping",
                "variable": "z",
                "property": "tiles:zoomTile",
                "required": true
            }
        ]
    }
}
``` 
From the reponse data above and the client-side code given above we can see that the client side code won't require
any changes and keep functioning normally. For x = 22990 and y = 14232 and zoom = 15 the URI constucted by the client
will be [https://c.tile.openstreetmap.org/15/14232/22990.png](https://c.tile.openstreetmap.org/15/14232/22990.png).

#### Further related reading

* [URI Templates](https://tools.ietf.org/html/rfc6570)

* [Hydra Templated Links](http://www.hydra-cg.com/spec/latest/core/#templated-links)

* [Filtering or Searching use case of hydra](https://github.com/HydraCG/Specifications/blob/master/drafts/use-cases/7.searching-events.md)

