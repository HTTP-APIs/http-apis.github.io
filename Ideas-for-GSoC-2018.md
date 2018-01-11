## Hydrus Server Changes:

* ### Command Line Interface for Hydrus
  Although Hydrus is primarily a Python-based library right now, most Hydra users may not be familiar with Python to set up servers. It would be great if we could have a CLI for Hydrus where users would just need to pass parameters to set up a server and get it up and running. 
  Also, the current process of server setup is long and needs a lot of prerequisite knowledge to be able to set up. 
  This process needs to be abstracted to make it simpler, and more powerful for a user to have more control over the server. Maybe something similar to Python’s SimpleHTTPServer. 

* ### Higher User defined Controls for the server
  There is no way right now to actually change the way the client accesses the server set up by Hydrus. Although there is some support for Authentication/Authorization, the actual implementations are very basic and do not offer much security features. There is also no way to control server access or limit/modify user privilege. There may be APIs that provide different levels of access to different users. There are also bottlenecks in place in REST APIs that limit the number of requests each user can make, such control is not given to users. There needs to be a way to add additional controls to the server, that can be built on top of the original Hydrus app.

