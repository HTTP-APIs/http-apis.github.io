---
layout: post
title: Open API parser | Hydraecosystem.org
permalink: /Coding-Begins/
---

# Open API to Hydra Parser 

The aim is to obtain the most accurate representation of API's defined using Open API specification to Hydra Specifications. 

## Parsing Structure 

The parser starts parsing from the "paths" object of the OpenAPI spec from where it parses every path and method to check if the "parameter" or "responses" block is referring to an object definition defined in the spec itself, if found the parser goes to whatever location is defined to parse the object defined there. 

From the object definition, it gets details like class name, description etc. It also gets the properties of the object defined from there. All this information is used to define a class and its `supported_props`. 

This class definition is stored in a dictionary mapped with the class name. The class name is also stored in a set for easy retrieval.

The "responses" block defined under "path"/"method" of OpenAPI spec is parsed to check if the API is returning a collection/array of items. This information is used to determine if the class in the picture is to be defined as a collection or not. 

When all of this is done we parse the method to obtain details like `class_expects`, `class_returns`, `status codes`, `messages` etc. Using the class name or path in question we fetch the already defined `HydraClass` from the dictionary and add the operation as `supported_ops` of the `HydraClass`.

Finally, we add all the classes with or without operations defined on them to the API doc and we generate `Entrypoint` for the system.

## Usage of Doc Writer Module 

Doc Writer module is being used at several places to form the Hydra API Documentation. The following classes have been used:
- `HydraClass` is being used to create Hydra class after parsing the object referred in the "path" object.
- `HydraDoc` is being used to initialize API Documentation using name, title, description, API name and base URL from the "info" block of the OPenAPI spec.
- `HydraClassProp` is used to add `SupportedProperty` to the Hydra Class. The properties are extracted from the object definition in the OpenAPI spec and parsed to check type, required flag.
- `HydraClassOp` is used to add `SupportedOperation` to the Hydra class. The operations of a Hydra class are basically the paths obtained by parsing the "paths" object of the OpenAPIS spec. Information like what expected input vocab, expected output vocab, status codes and the corresponding message, as well as the collection flag, is used to add the property to the Hydra class.

![Scr](https://user-images.githubusercontent.com/19390504/41200793-fce5cace-6cc8-11e8-9956-5155fd94cfab.png)

---

