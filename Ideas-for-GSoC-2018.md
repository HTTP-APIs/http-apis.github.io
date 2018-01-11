## Hydrus Server Changes:

* ### Command Line Interface for Hydrus
  Although Hydrus is primarily a Python-based library right now, most Hydra users may not be familiar with Python to set up servers. It would be great if we could have a CLI for Hydrus where users would just need to pass parameters to set up a server and get it up and running. 
  Also, the current process of server setup is long and needs a lot of prerequisite knowledge to be able to set up. 
  This process needs to be abstracted to make it simpler, and more powerful for a user to have more control over the server. Maybe something similar to Python’s SimpleHTTPServer. 

* ### More User defined Controls for the server
  There is no way right now to actually change the way the client accesses the server set up by Hydrus. Although there is some support for Authentication/Authorization, the actual implementations are very basic and do not offer much security features. There is also no way to control server access or limit/modify user privilege. There may be APIs that provide different levels of access to different users. There are also bottlenecks in place in REST APIs that limit the number of requests each user can make, such control is not given to users. There needs to be a way to add additional controls to the server, that can be built on top of the original Hydrus app.

* ### API Querying
  Right now, we only have no mechanism for searching an instance of a class in the Hydra API. Most APIs implement a search feature where the data is queried using a defined syntax. This is more of an issue with Hydra itself as the mechanism for search is not defined in Hydra yet. It would be great if we can have some advance querying functionality like they have in graph databases.

***
## Demos

* ###  Demonstration with Dynamic API paths
  If we can create an API whose structure(paths to different kinds of data) is constantly changing only the vocab path stays same. Then we can use a Hydra client to discover the required paths for various kinds of data. This can be a great way to demonstrate the capabilities and use cases of HTTP-APIs and Hydra in general.
We can have a UI showing the API structure in real-time and allow users to POST/GET/PUT/DELETE any type of data. We can also show how the client and API server interact with each other ( We had a lot of requests going on in the drone demo and it was very difficult to understand how things are working in the background.)
For example:
Suppose we have a Student class with basic properties like Name, Id, Class etc. Then the user can request for data say "Students with Id = 1*" without knowing anything about the API structure as it's dynamic. We can also demonstrate advanced querying features with this.

* ### Satellite and Subsystems Demo
  We may finally end up implementing the astronomy/satellites vocabulary as thought in the beginning. We need a way to demonstrate how Hydra can be utilized by Satellites to communicate with each other and get information about each of their subsystems and statuses. The OWL Vocabulary for Subsystems is given [here](https://github.com/chronos-pramantha/RDFvocab). We need to create a Hydra Spec for a demo system that will use these ontologies for a demo.

* ### Risk Management with OpenRisk
  We can use the OpenRisk API to create a Hydra Vocabulary that will set up a Hydra based API to use OpenRisk and serve risk management. This is subjective to OpenRisk allowing us to use their API for demo purposes.

* ### Rail Management System
  We can have a cool demo about railway management where trains are routed based on available tracks and are assigned platforms and routes based on live information taken from several trains. This could be a good demo to showcase how Hydra can be used as a generic language since not all railway stations would use the same API to convey information to trains. We could have multiple Hydra based APIs running on railway stations and trains and all of them communicating with each other using Hydra and a common Vocabulary. We still need to find a vocabulary for this, or we could also create one.

## Client Implementation
   We still need to implement a generic Hydra client that can reference an API Documentation and allow users to interact with an API using objects, rather than URIs/paths. The HydraConsole is a good reference client to use, and we could extend functionality and implement a Python version of it. More ideas are welcome on this.

