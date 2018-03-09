This page explains the authentication options you can apply to your API.

### How to enable authentication?

Authentication can be enabled using two simple commands in the following manner while setting up your API:

```python
    # Add authorised users to the API.
    add_user(id_=1, paraphrase="test", session=session)
    with set_authentication(app, True):
        # Use authentication for all requests
        with set_token(app, True):
        #Add token based authorization
```
- `add_user(id_=1, paraphrase="test", session=session)` function allows you to add authorized user
   credentials in the database.
- `with set_authentication(app, True):` This function sets the authentication appcontext variable 
   to use authentication for each request. You cen set it to `False` if you don't need authentication
   for your endpoints.
- `with set_token(app, True):` Once authentication is set for endpoints this function allows you to enable    a basic token based authorization for the users.

### Authentication system of the API

Currently the API uses a basic **two factor authentication** to authenticate the users to the API
using **user nonce** and **credentials**.
Here is a step by step detailed explanation of the authentication system :

- The user requests the server for a protected resource.
- The server responds with a `401 response` along with a nonce-value in the `X-Authentication` header
  as `X-Authentication: nonce-value` and a `basic authentication` challange.
- The client has to provide the user credentials in the `Authorization header` encoded in the basic 
  authentication format i.e base64 as `Authorization: Basic encoded-credentials` where the `encoded-credentials` string is generated as
   ``` python
        b64encode(b"username:password").decode("ascii")
   ```
- Along with the credentials, the client has to provide the nonce value obtained from the server in          previous response in the `X-Authentication` header. The **nonce** is **valid for 1 min** and is valid      for **1 request only**, i.e the client shall get a unique nonce everytime the server sends a 401           response.
- After succesful authentication the server responds with the user token(if enabled) or the response data. 


Here is an example of server `failed authentication response`:
``` bash
 HTTP/1.1 401 UNAUTHORIZED
 Content-type: application/ld+json
 WWW-Authenticate: Basic realm="Login required"
 X-Authentication: ea2ab992-ba92-45ff-89da-2a8e2adce4c1
 Link: <http://localhost:8080/serverapi/vocab>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"
 Access-Control-Allow-Origin: *
 Content-Length: 48
 Date: Wed, 07 Mar 2018 18:28:04 GMT
 
{
  "401": "Need credentials to authenticate"
}
```

And here is the corresponding user request to succesfully authenticate with the server:

``` bash
 GET /serverapi/DroneCollection HTTP/1.1
 Host: localhost:8080
 User-Agent: curl/7.47.0
 Accept: */*
 X-Authentication:ea2ab992-ba92-45ff-89da-2a8e2adce4c1
 Authorization: Basic MTp0ZXN0
```

### Token based authorization system

Once the client is authenticated, the API assigns a **unique time-bound token** to the client.
This token can now be used by the client to access any protected endpoint within the token-expiry time
which is set to **45 min**.
The user can request for the token by successfully authenticating with the server and the token alone 
can be used to access any resource without any further authentication.

Here is a step by step explanation to the token based authorisation system:

- The server sends a `200` response with the token value in the `X-Authorization` header.
- The client can now request any resource just by adding the token in the `X-Authorization` request
  header.

Here is the token generation response after client succesfully authenticates in the above request:

``` bash
 HTTP/1.1 200 OK
 Content-type: application/ld+json
 X-Authorization: f93046c97070998142cbbf8fb42886
 Link: <http://localhost:8080/serverapi/vocab>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"
 Access-Control-Allow-Origin: *
 Content-Length: 36
 Date: Wed, 07 Mar 2018 18:30:31 GMT
 
{
  "200": "User token generated"
}
``` 

And this the sample format of a user request to access any protected endpoint:

``` bash
 GET /serverapi/DroneCollection HTTP/1.1
 Host: localhost:8080
 User-Agent: curl/7.47.0
 Accept: */*
 X-Authorization:cb6a897d9d47608fcf75c11b59f6ab
```
