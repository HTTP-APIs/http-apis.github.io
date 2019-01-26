---
layout: post
title: IriTemplate explained with an example
category: Blog
tags: [Hydra, Semantic Web, IriTemplate]
---
IRI Templates provide an easy and elegant way to describe a range of IRIs with help of variable expansion.
In context of hypermedia driven APIs IRI templates are particularly useful when the server can't construct a URL by itself; only the
client posses the required information to construct desired URL.

Hydra provides `IriTemplate` class which can be used to provide URL template to smart clients, which can be used by those clients 
to construct valid URLs. As the title of this article suggest we will use an example to explain working of `IriTemplate` in detail.

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
