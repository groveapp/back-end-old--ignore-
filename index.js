const express = require("express");
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


app.listen(3000);

