//patch
fetch("http://localhost:3000/users/ID", {
  method: "PATCH",
  body: JSON.stringify({ name: "SomebodyNew" }),
  headers: { "Content-Type": "application/json" }
})
  .then(response => response.json())
  .then(json => console.log(json));

//Create
fetch("http://localhost:3000/users", {
  method: "POST",
  body: JSON.stringify({ name: "somename" }),
  headers: { "Content-Type": "application/json" }
})
  .then(response => response.json())
  .then(json => console.log(json));

//Delete

fetch("http://localhost:3000/users/ID", {
  method: "DELETE"
})
  .then(response => response.json())
  .then(json => console.log(json));
