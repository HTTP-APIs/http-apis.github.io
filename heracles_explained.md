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

Classes of Client is the implementation of the Interfaces, there are so many interfaces like IProperty, IOperation and etc. And there is a folder Collection which contain the implementation of all collection interface like FilterableCollection, LinkCollection and OperationCollection where FilterableCollection returns numbers of items ni collection, members of collection, and LinkCollection returns the collection of link for given type, and OperationCollection returns the operations for given type and so on. So, that's client have functionality to shows the operation, members, no. of items, links and type and etc.

And Some interface for Collection is like IHypermediaContainer which have the track for members, operation, links for a given type of collection.

For Classes, IClass simply have displayname, description, supporetdOperation and supportedProperty. And for supportedOperation there is an interface IOperation which returns methods for operations and for supportedProperty there is an interface ISupportedProperty which have properties like writeable, readable and property contains one more interface in it IProperty which able to return display name, description and other properties. 


### Design Patters of Client 

#### Design for HydraClient Class:

HydraClient is using for getting Url, ApiDocumentationUrl, and after that ApiDocumentation and also check there is an entry point exists or not. It simply works with the IHyadraClient interface which working to obtain ApiDocumentation, representation of Resource.

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


Actually, There are many interfaces which have track on the objects as well as its properties as we have disussed above and with the implementation of the interface(called Class above) means accessing the members or properties of interface that client can get a lot of knowledge about its given url or server.

So, Load on server and speed can be limitation for that's client.

But In hydra-py agent we are dicsussing mainly about to reduce the load on server and tying to fast querying for the client. For that's type of problem, We are using Redis to reduce load of server and we can implement indexing(specially secondary/faceted indexing) of objects and its properties in Redis with a good querying mechanism which can make the Redis more fast and efficient. But we can take an idea from there, what should be stored in Redis and how it can be show to client.

Ref:

https://www.hydra-cg.com/spec/latest/core/

https://github.com/HydraCG/Heracles.ts/tree/master/docs

---
* [Back to Index](README.md)

