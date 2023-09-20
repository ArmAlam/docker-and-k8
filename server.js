const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello from docker");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("this is a post request");
});


app.listen(80)
