import express from "express";

import connectionToDatabase from "./helpers.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi there</h2>");
});

await connectionToDatabase();

app.listen(3000, () => {
  console.log("app running on port 3000");
});
