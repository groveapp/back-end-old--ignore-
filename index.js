const express = require("express");
const db = require('./queries')
let app = express();

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

data = {
    msg: "Welcome to Grove app",
    info: "This is a root endpoint",
    Working: "Functions",
    request:
      "Requests",
  };

app.get("/", (req, res)=> res.json(data));

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.listen(3000);

