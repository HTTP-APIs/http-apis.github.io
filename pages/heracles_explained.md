---
layout: page
title: Analysis of Heracles.ts | Hydraecosystem.org
permalink: /heracles_explained
---
  
## Analysis of Heracles.ts

HydraClient, also known as Heracles.ts, is a generic client for Hydra-powered Web APIs. You can find the code at this repository [here](https://github.com/HydraCG/Heracles.ts). It is the reference implementation of a Hydra client in TypeScript.

### Client Part in Hydra

The basic idea behind Hydra is to provide a vocabulary which enables a server to advertise valid state transitions to a client. A client can then use this information to construct HTTP requests which modify the server’s state so that a certain desired goal is achieved. Since all the information about the valid state transitions is exchanged in a machine-processable way at runtime instead of being hardcoded into the client at design time, clients can be decoupled from the server and adapt to changes more easily.

Index of Heracles.ts:

- Enumerations 
- Classes
- Interfaces
- Type Aliases
- Variables
- Functions
- Object Literals
  
Enumerations define a set of named constants. For example CrawlingDirection contains members named backwards and forwards defining possible partial collection view directions. Similarly, Level has members named FullSupport and None demonstrating Hypermedia support level. FullSupport=100 means exact support of response whereas None=0 means not a supported response. LinksPolicy defines various possible link policies.

Classes are a blueprint from which objects are created. Some of the Classes that are used in Heracles.ts are discussed below.

The HydraClientFactory class provides a factory of HydraClient, meaning HydraClient can be configured and created using this class. By default, JSON-LD hypermedia processor, bodyResourceIRITemplateExpansionStrategy and fetch components are used to initialise HydraClient.

BodyResourceIRITemplateExpansionStrategy class provides a simple implementation of IRITemplateExpansionStrategy interface where an input resource is used to fill all the possible IRI Templates with values.

An IRI template is a template literal and set of mappings.

The MappingsBuilder Class provides a builder for IRI template variable mapping values. MappingsCollection class is an IRI template variable mappings collection.

While requesting for a resource one may construct a query that is known only to the client and that’s where Templated Resources come into picture. The TemplatedResource Class provides a base functionality for resources that has an expandable template. TemplatedLink Class provides a link that can have an URI template. Whereas TemplatedOperation class defines an abstract hydra operation that uses an URI template to point to the target of the request.
  
The somehow related resources are grouped together in a collection. For eg. OperationCollection provides a collection of abstract hydra operations that can be filtered with relevant criteria. Similarly LinkCollection provides a collection of a link that describes another resource and that too filtered with relevant criteria. This filtering capability is provided by the FilterableCollection Class. The ResourceFilterableCollection inherits this basic functionality from FilterableCollection Class. Similarly LinksCollection and OperationsCollection class inherits from the ResourceFilterableCollection Class.

Sometimes the collection gets large and it needs to be splitted into multiple pages. In hydra this is achieved via PartialCollectionView  that may contain links to first, next, previous and last PartialCollectionView. So, the client will have to crawl through the PartialCollectionView. This in, Heracles.ts is achieved by PartialCollectionCrawler class. It provides capability of crawling through partial collection views. 

The APIDocumentaion consists of all the valid state changes, but chances are that EntryPoint might be missing from the API Documentation. So, to rectify that Heracles.ts uses EntryPointCorrectingGraphTransformer. It tries to correct missing entry point in hydra:ApiDocumentation resource. 

Interfaces contain the abstract functions and types. A Class then implements the interface. Some of Interfaces are for classes discussed above are IApiDocumentation, IClass, ICollection, ICrawlingOptions, IHydraClient, ILink etc.

Type Alias gives a semantic name to the types. It's just an alias for a type. For Eg. Literal is type alias for union type of string, boolean and number. Similarly HeaderMatcher is a type alias for a function of type that takes in header as param and returns boolean. Hypermedia is a type alias for functions that take in context and returns Hypermedia Processor.

Variable dependentTypes is an array of two strings which helps in checking whether a resource is hydra independent. Likewise JSONLdContext contains the iri http://www.w3.org/ns/json-ld#context. RdfNamespace as the name suggests contains the iri http://www.w3.org/1999/02/22-rdf-syntax-ns#. 

Several helper functions are also used in Heracles.ts. AddTo adds an item to the collection. discoverCollectionsFrom function finds out collections from given hypermedia. The collection function is used to create mapping of a collection and initailizes with default values. isLink functions checks whether is type is hydra:Link or hydra:TemplatedLink. linksAndOperations function creates mappings of template, variable, expects, returns etc with target values.

Object Literals like hydra are defined in namespaces.ts file it defines the core vocabulary terms. JSONLd Helper contains a validKeys method that returns all the valid keys. The rdf object defines useful RDF terms. The rdfs defined useful RDFS terms.

Load on server and speed can be a limitation for the client. But in [python-hydra-agent](https://github.com/HTTP-APIs/python-hydra-agent) we are discussing mainly how to reduce the load on the server and fast querying from the client. For this we are using Redis to reduce load on the server and we implemented indexing (specially secondary/faceted indexing) of objects and their properties in Redis with a good querying mechanism which makes operations faster and efficient.


### Run Heracles.ts in Browser

Create a project folder and navigate into it.

Make sure you have node installed. If not, follow the instructions [here](https://nodejs.org/en/download/).

Install typescript. 
```bash
npm install -g typescript
```

Run 
```bash
npm init --yes
```

Install browserify, tsify (to bundle js files) and heracles.

```bash
npm install browserify tsify @hydra-cg/heracles.ts --save
```

Create a new file main.ts and Import Heracles and create a new Instance of the client.
```typescript
//main.ts
import HydraClientFactory from  "@hydra-cg/heracles.ts";

let hydraClient = HydraClientFactory.configure().withDefaults().andCreate();
```

   
Now let's fetch a resource. Anything that can be dereferenced by an IRI can be considered as a resource.

```typescript
//main.ts
const main = async () => {  
const resource = await hydraClient.getResource("http://myapi/");  
// Do something with resource  
}  
main();
```

The getResource method returns a HypermediaContainer. To keep things simple,use a hydra powered API provided by the server of this ecosystem. Installing and running hydrus is pretty straightforward. Follow the Instructions [here](https://github.com/HTTP-APIs/hydrus).

Once the server is up and running, its API can be used. To see the results, console the resource.

```typescript
//main.ts
const main = async () => {  
const resource = await hydraClient.getResource("http://localhost:8000/api/vocab");  
console.log('resource', resource);  
}  
main();
```

To compile our code into ES2018, run in the terminal:

```bash
tsc --init --target es2018
```

To run npm packages in the browser, they need to be bundled. In the terminal run:

```bash
browserify main.ts -p [ tsify --noImplicitAny ] > bundle.js
```
To run bundle.js in the browser, create a html file index.html and include that script.
```html
<!--index.html -->
 <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>
  <h1>Heracles.ts Demo </h1>
  </body>
  <script src="bundle.js"> </script>
</html>
```
Open the file in the browser and in the console you can see the response. It should look something like this.

```json
{
"@context": { 
	"ApiDocumentation": "hydra:ApiDocumentation", 
	"description": "hydra:description", 
	"expectsHeader": "hydra:expectsHeader"
	...
}​
"@id": "http://localhost:8080/api/vocab"
"@type": "ApiDocumentation"
"description": "API Documentation for the server side system"
​}
```
The client can be customized by choosing which resource relations should be treated as links and exposed in the links property. By calling either

-   .withAllLinks() - treats all related resources as links
    
-   .withAllHttpLinks() - similar as above, but only HTTP(S) URLs will be considered
    
-   .withSameRootLinks() - only URLs from the same root of the requested resource will be considered
    
-   .withStrictLinks() - this is the default - only links exposed as hydra:link will be considered

```typescript
let hydraClient = HydraClientFactory.configure().withDefaults().withAllLinks().andCreate();
```
Even though by default JSON-LD serialisation is used other serialisations of RDF can also be used. This can be achieved by calling either of the functions :

-   .with(component: IHypermediaProcessor) - accepts a custom implementation of the IHypermediaProcessor interface
    
-   .withFactory(method: HypermediaProcessorFactory) - accepts a parameter factory method that will provide the instance as required.


Refs:
-   [Hydra Specs](https://www.hydra-cg.com/spec/latest/core/)
      
    
-   [Heracles.ts Docs](https://github.com/HydraCG/Heracles.ts/tree/master/docs)



