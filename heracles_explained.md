## Analysis of Heracles.ts 

HydraClient, also known as Heracles.ts, is a generic client for Hydra-powered Web APIs.

### Client Part in Hydra 

The basic idea behind Hydra is to provide a vocabulary which enables a server to advertise valid state transitions to a client. A client can then use this information to construct HTTP requests which modify the server’s state so that a certain desired goal is achieved. Since all the information about the valid state transitions is exchanged in a machine-processable way at runtime instead of being hardcoded into the client at design time, clients can be decoupled from the server and adapt to changes more easily.

Heracles.ts defines mainly two type of Index:

* Classes
* Interface

and it also contain a vaiable called `hydra` like `hydra:{any_string("http://www.w3.org/ns/hydra/core#")}`.



### Components Of Client 

Classes are further divides in:
* HydraClient
* ApiDocumentation
* JsonLdHypermediaProcessor
* ResourceEnrichmentProvider

Interface are divided in:
* IClass
* IApiDocumentation
* IHydraResource
* IHypermedia
* IHypermediaContainer
* IHypermediaProcessor
* IOperation
* IResource
* IWebResource

    

### Design Patters of Client 

#### Design for HydraClient Class:

HydraClient is using for getting Url, ApiDocumentationUrl, and after that ApiDocumentation and also check there is an entry point exists or not.

HydraClient Methods(simply functions):
* getApiDocumentation
* getApiDocumentationUrl
* getHypermediaProcessor
* getResource
* getUrl


#### Design for ApiDocumentation Class:

ApiDocumentation is using for assign the values to properties or variables like type, title, description, supportedClasses, Entrypoint etc. ApiDocumentation is the default implementation of IApiDocumentation.

ApiDocumentation Methods and Properties:
* getEntrypoint
* type
* title
* description
* supportedClass
* entrypoint


#### Design for JsonLdHypermediaProcessor Class:

JsonLdHypermediaProcessor is a JSON-LD based implementation of IHypermediaProcessor.

JsonLdHypermediaProcessor Methods and properties:
* supportedMediaTypes
* process
others are private methods.


#### Design for ResourceEnrichmentProvider Class:

ResourceEnrichmentProvider provides IWebResource enrichment routines. It enriches a given resource with IHypermediaContainer specific properties with method enrichHypermedia.

ResourceEnrichmentProvider Methods:
* enrichHypermedia


Ref:

https://www.hydra-cg.com/spec/latest/core/

https://github.com/HydraCG/Heracles.ts/tree/master/docs

---
* [Back to Index](README.md)

