---
layout: page
title: Pagination with PartialCollectionView and client-initiated pagination | Hydraecosystem.org
permalink: /Pagination
---
## Pagination with `hydra:PartialCollectionView` and client-initiated pagination

hydrus provides support for basic pagination through `hydra:PartialCollectionView`. By default hydrus always returns paginated
response for collections, user can disable it by using `--no-pagination` command while staring the server. The defualt page 
size is 10 which can be changed using the `--pagesize` or `--ps` CLI parameter while launching the server. 
If pagination is enabled then every request to get collection will return a `view` of the collection with a fixed number of 
maximum elements it can contain. It will also provide controls to get other pages(views) of the same collection.

#### Example Response :
```
{
  "@id":  "http://api.example.com/DroneCollection" ,
  "@type":  "Collection" ,
  "member": [ {
      "@id":  "/DroneCollection/2sdmsd1iw3mskce6"​ ,
      "@type":  "Drone"
      },
      {
      "@id":  "/DroneCollection/cjn3udneuh73db5f"​ ,
      "@type":  "Drone"
      },
      {
      "@id":  "/DroneCollection/feidndn37dnuff8w"​ ,
      "@type":  "Drone"
      },
      {
      "@id":  "/DroneCollection/fuefh37hdedh311q"​ ,
      "@type":  "Drone"
      }
  ],
  "totalItems" :  100 ,
  "view": {
      "@id":  "/DroneCollection?page=3" ,
      "@type":  "PartialCollectionView" ,
      "first":  "/DroneCollection?page=1" ,
      "previous":  "/DroneCollection?page=2" ,
      "next":  "/DroneCollection?page=4" ,
      "last":  "/DroneCollection?page=25" ,
  }
}
```
### Client-initiated pagination:

Client-initiated(or client-controlled) pagination gives the control of pagination mechanism to the client.
With the help of `IriTemplate` discussed [here](http://www.hydraecosystem.org/IriTemplate), hydrus attachs an `IriTemplate` with 
`IriTemplateMapping`s for `limit`, `offset` and `pageIndex`. Then client can use this parameters to control how pagination is done.

##### Example response for limit = 1:
```
{
  "@context": "/serverapi/contexts/DroneCollection.jsonld",
  "@id": "/serverapi/DroneCollection/",
  "@type": "DroneCollection",
  "members": [
    {
      "@id": "/serverapi/DroneCollection/cf5d8c22-6341-4ed0-8820-1c899ff849d8",
      "@type": "Drone"
    }
  ],
  "search": {
    "@type": "IriTemplate",
    "mapping": [
      {
        "@type": "IriTemplateMapping",
        "property": "http://auto.schema.org/speed",
        "required": false,
        "variable": "DroneState[Speed]"
      },
     .../other search params
      {
        "@type": "IriTemplateMapping",
        "property": "pageIndex",
        "required": false,
        "variable": "pageIndex"
      },
      {
        "@type": "IriTemplateMapping",
        "property": "limit",
        "required": false,
        "variable": "limit"
      },
      {
        "@type": "IriTemplateMapping",
        "property": "offset",
        "required": false,
        "variable": "offset"
      }
    ],
    "template": "/serverapi/Drone(DroneState[Speed], DroneState[Position], DroneState[Direction], DroneState[Battery], DroneState[SensorStatus], DroneState[DroneID], name, model, MaxSpeed, Sensor, pageIndex, limit, offset)",
    "variableRepresentation": "hydra:BasicRepresentation"
  },
  "totalItems": 2,
  "view": {
    "@id": "/serverapi/DroneCollection?limit=1&page=1",
    "@type": "PartialCollectionView",
    "first": "/serverapi/DroneCollection?limit=1&page=1",
    "last": "/serverapi/DroneCollection?limit=1&page=2",
    "next": "/serverapi/DroneCollection?limit=1&page=2"
  }
}
```
#### Related reading

* [PartialCollectionView](https://www.w3.org/community/hydra/wiki/Pagination#PartialCollectionView)

* [Client-initiated pagination](http://www.hydra-cg.com/spec/latest/core/#client-initiated-pagination)

