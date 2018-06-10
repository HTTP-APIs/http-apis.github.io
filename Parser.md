# Open Api to Hydra Parser 

The aim is to obtain the most accurate representaion of API`s defined using Open Api specification to Hydra Specifications . 

## Parser Structure 

The parser starts parsing from the 'paths' object of the OAS spec from where it parses every path and method to check if the "parameter" or "responses" block is referring to a object definition defined in the spec itself , if found the parser goes to whatever location is defined to parse the object defiend there . 

From the object definition it gets details like class name , description etc . It also gets the properties of the object defined from there . All this information is used to define a class and its supported_props . 

This class definition is stored in a dict mapped with the class name . The class name is also stored in set to easy retrieval .

The "responses" block defined under "path"/"method" of oas spec is parsed to check if the api is returning a collection/array of items . This information is used to determine if the class in the picture is to be defined as a collecion or not. 

When all of this is done we parse the method to obtain details like class_expects , class_returns , status codes , messages etc . Using the class name or path in question we fetch the already defined HydraClass from dict and add the operation as "supported_ops" of the Hydra Class .

Finally we add all the classes with or without operations defined on them to the api doc and we generate entrypoint for system .

