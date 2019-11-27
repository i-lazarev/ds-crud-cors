# Express - Exercise CRUD

## Write me a user CRUD app

Write an express app which allows user management from a frontend (by using fetch).

We want to be able to:
* get all our users
* insert new users
* update a user
* delete a user

## Instructions

* Find the given package.json and take a look inside
    * you find here the packages express and uuid as 
    dependencies
* Install the dependencies with: `npm i`

* Create a file server.js and setup an express-app
* It should listen on port 3000

* Create an empty users array before defining any routes:
    let users = []

* Setup a middleware which allows us to receive data as JSON with:
    app.use(express.json())

* Implement the four CRUD routes GET, POST, PUT, DELETE
    * app.get("/users")
    * app.post("/users")
    * app.patch("/users/:id")
    * app.delete("/users/:id")

* All these routes should read / manipulate the array users

* All routes should send back data as JSON
    * get => all users (= array)
    * post => the created user
    * patch => the updated user
    * delete => an empty object

* User objects, which are stored in this array, should have the following format:
    { id: '\<uuid\>', name: '\<name\>' }
    * When creating new users => use the uuid package to generate a unique ID !


### CORS

Apply a global CORS middleware, so we can call our API from "outside" with fetch:

```
app.use((req, res, next) => {
    ... your CORS handling goes here...
})
```


### Testing

Use the following fetch commands in the browser to test if your API is working:

Caution: 
* each fetch command contains a little error 
    (either syntax or logical)
* spot the error in each one and fix it !
* then execute it in the browser


#### Create

Create three users. Execute the follwing fetch in the browser console three times with different names:

fetch('http://localhost:3000/users', {method: "POST", 
    body: JSON.stringify({name: "somename"}), headers: {"Content-Type": "text/plain"}
})
  .then(response => response.json())
  .then(json => console.log(json))


#### Read

fetch('https://localhost:3000/users')


#### Delete

=> delete the third created user by using its ID
(grab the ID from your third user)

fetch('http://localhost:3000/users/\<idOfYourThirdUser\>', {method: "REMOVE"})
  .then(response => response.json())
  .then(json => console.log(json))


#### Update / Patch

=> update the first created user by using its ID
(grab the ID from your third user)

fetch('http://localhost:3000/posts/\<idOfYourFirstUser\>', {method: "PATCH", body: JSON.stringify({"name": "SomebodyNew"}), headers: { "Content-Type": "application/json" }})
  .then(response => response.json())
  .then(json => console.log(json))

