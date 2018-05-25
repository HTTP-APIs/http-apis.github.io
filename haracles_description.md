
HydraClient
===========
HydraClient, also known as heracles.ts, is a generic client for Hydra-powered Web APIs.
The basic idea behind Hydra is to provide a vocabulary which enables a server to advertise valid state transitions to a client. A client can then use this information to construct HTTP requests which modify the server’s state so that a certain desired goal is achieved.

hydraclient.ts 
--------------
Hydraclient.ts tells about that how client get the objects, APIdocumentation and other properties and opertion for the given id.    

Apidocumentation.ts
-------------------
It tell us about the properties like type, title, description, supportedClasses, entrypoint and etc.It has a constructor it automatically set the data for the above properties.

On the other hand, IApidocumentation.ts is file that gives(get) the above properties or we can access those properties by using this file(module).

For access the properties of classes(supportedClasses) it have a file Iclass.ts which gives(return) the properties for every class stored there, properties is like- displayname, description, supportedOperation and supportedProperty.
 
And by this method client can get all the properties with the help of recursively call the functions or modules which are defined in heracles.ts.

It(heracles.ts) have the different modules for every endpoint for getting the information from it easily.






Patterns used by the clients
============================






