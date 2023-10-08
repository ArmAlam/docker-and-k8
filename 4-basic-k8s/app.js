const express = require("express");

const PORT = 8080;
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("Hello from Node.js");
});

app.post("/error", async (req, res) => {
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
