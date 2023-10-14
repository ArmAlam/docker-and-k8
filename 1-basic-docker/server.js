const fs = require("fs").promises;
const { existsSync } = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/feedback", express.static("feedback"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "pages", "feedback.html");
  res.sendFile(filePath);
});

app.get("/exists", (req, res) => {
  const filePath = path.join(__dirname, "pages", "exists.html");
  res.sendFile(filePath);
});

app.post("/create", async (req, res) => {
  const title = req.body.title;
  const content = req.body.text;

  const adjTitle = title.toLowerCase();

  const tempFilePath = path.join(__dirname, "temp", adjTitle + ".txt");
  const finalFilePath = path.join(__dirname, "feedback", adjTitle + ".txt");

  console.log("TEST!!!!!");

  await fs.writeFile(tempFilePath, content);

  console.log('hi')

  if (existsSync(finalFilePath)) {
    res.redirect("/exists");
  } else {
    await fs.copyFile(tempFilePath, finalFilePath);
    await fs.unlink(tempFilePath);
    res.redirect("/");
  }
});

app.listen(process.env.PORT);
