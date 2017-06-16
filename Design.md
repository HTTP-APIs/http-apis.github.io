This section explains the design, architecture and the implementation of Hydrus along with a few use cases for the same.

Table of contents
-------------
* [Database Design](#dbdesign)
* [Data flow](#dataflow)
* [Use cases](#usecase)
<a name="dbdesign"></a>
### Database Design
The design of the Database takes into account the different types of representations possible using the triple format.
Typically, there are 4 types of triples that are stored in a `Graph`:
* **`Class >> Property >> Class` [`GraphCAC`]**
* **`Resource >> Property >> Class` [`GraphIAC`]**
* **`Resource >> Property >> Resource` [`GraphIII`]**
* **`Resource >> Property >> Value` [`GraphIIT`]**

For a distinction between the different types of `Value`, we created a `Terminal` class, which contains a `value` and it's `unit`.
There is also a distinction between properties that map to `Resources` and `Terminals` and those that map to `Classes`.
We call `Properties` that map to `Classes` as `AbstractProperty` and the other as `InstanceProperty`.

Below is the schema diagram for our database design:

![DB Schema](https://github.com/HTTP-APIs/hydrus/blob/develop/docs/wiki/images/db_schema.png?raw=true "Schema")

<a name="dataflow"></a>
### Data Flow
Here is a small illustration as to how data flows in Hydrus.

Hydra API Documentation to server endpoints:

![API Flow](https://github.com/HTTP-APIs/hydrus/blob/develop/docs/wiki/images/hydra_dataflow.png?raw=true "API Flow")

RDF/OWL declarations to server endpoints:

![RDF Flow](https://github.com/HTTP-APIs/hydrus/blob/develop/docs/wiki/images/rdf_dataflow.png?raw=true "RDF Flow")

<a name="usecase"></a>
### Use cases
This section explains Hydrus's design and a use case for the same.
For the demonstration, the server has the [Subsystems](http://ontology.projectchronos.eu/documentation/subsystems) and [Spacecraft](http://ontology.projectchronos.eu/documentation/spacecraft) vocabularies.

Here is an example of a system used to serve data using the components of Hydrus:

![Use case](https://github.com/HTTP-APIs/hydrus/blob/develop/docs/wiki/images/use_case1.png?raw=true "Use case")

**A simple example explaining the use of the above architecture would be:**
* User types in the query “What is the cost of a Thermal Subsystem?”.
* Middleware uses NLP to extract keywords `Thermal Subsystem` and `cost` and maps it to the Hydra instances and properties present at the server.
* Middleware passes these instances and the underlying query to the client.
* Client models a request and uses the API endpoints to extract the given information from the server.
* Server replies with the required value.
* Client serves data to the User.