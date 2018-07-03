# Open Api -> Hydra Parser 


Open Api Specification(OAS) defines a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic . Hydra and Open Api can be considered as siblings working forward to achieve the same goal. OAS is quite extensive and has gained a lot of popularity in the recent times . To allow the users of Open Api to experiment with and to use Hydrus in their projects it is very important to provide an easy way of migration . Both Hydrus and Open Api require that the user defines the structure of the API`s via a document known as API documentation . In the current scenario if an existing Open Api user wants to experiment with Hydrus he/she would have to write the Api Documentation again for Hydrus . As this becomes a huge barrier for entry eliminating this barrier makes sense.




## Use Cases 

### Convert OAS to Hydra 
Just pass the Open Api Documentation to the `parse` method of the parser to get the api documentation which can be used by hydrus to setup the server.

For example 

```
from openapi_parser import parse
hydrus_api_documentation = parse(open_api_documentation)
```
 
### Object Definition to Hydra Class 
Object definition given under any key in OAS can be converted to Hydra Class . Information like object name , properties are given in the definition , this can be used to construct a Hydra Class using functions given in `doc_writer.py`.

#### Open Api Snippet 
```
User:
    type:                         object
    properties:
      id:
        type:                     integer
        format:                   int64
      username:
        type:                     string
      firstName:
        type:                     string
      email:
        type:                     string
    xml:
      name:                       User
```

#### Hydra Snippet 
```
{
            "@id": "vocab:User",
            "@type": "hydra:Class",
            "description": "User",
            "supportedOperation": [
                {
                    "@type": "http://schema.org/UpdateAction",
                    "expects": "vocab:User",
                    "method": "POST",
                    "possibleStatus": [
                        {
                            "description": "Successful Operation",
                            "statusCode": 200
                        }
                    ],
                    "returns": "null",
                    "title": "Create user"
                }
            ],
            "supportedProperty": [
                {
                    "@type": "SupportedProperty",
                    "property": "vocab:id",
                    "readonly": "true",
                    "required": "false",
                    "title": "id",
                    "writeonly": "true"
                },
                {
                    "@type": "SupportedProperty",
                    "property": "vocab:username",
                    "readonly": "true",
                    "required": "false",
                    "title": "username",
                    "writeonly": "true"
                },
                {
                    "@type": "SupportedProperty",
                    "property": "vocab:firstName",
                    "readonly": "true",
                    "required": "false",
                    "title": "firstName",
                    "writeonly": "true"
                },
                {
                    "@type": "SupportedProperty",
                    "property": "vocab:email",
                    "readonly": "true",
                    "required": "false",
                    "title": "email",
                    "writeonly": "true"
                },
            ],
            "title": "User"
        },
```


