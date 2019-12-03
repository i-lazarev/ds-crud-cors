const express = require("express");
const uuid = require("uuid/v1");
const api = express();
const cors = require("./middleware/cors");

api.use(cors);

api.listen(3000, () => {
  console.log("Server listening on port: 3000");
});

api.use(express.json());

let users = [];

api.get("/", (req, res) => {
  res.send("<h1>This is Home page</h1>");
});

api.get("/users", (req, res) => {
  res.send(`Users: ${JSON.stringify(users)}`);
});

api.post("/users", (req, res) => {
  // req.body contains the form data as an object
  //console.log("Body data:", req.body)
  users.push({ name: req.body.name, id: uuid() });
  res.send({});
});

api.patch("/users/:id", (req, res) => {
  users.map(user =>
    user.id === req.params.id ? (user.name = req.body.name) : user
  );
  res.send({});
});

api.delete("/users/:id", (req, res) => {
  console.log("DELETE routed called");
  users =  users.filter(user =>
     user.id != req.params.id 
   )
  //res.send("DELETE route called")
  res.send({});
});
