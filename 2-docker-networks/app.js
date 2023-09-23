const express = require("express");
const axios = require("axios").default;
const mongoose = require("mongoose");

const Favourite = require("./models/favourite");

const app = express();

app.use(express.json());

app.get("/favourites", async (req, res) => {
  const favourites = await Favourite.findAll();
  res.status(200).json({ favourites });
});

app.post("/favourites", async (req, res) => {
  const favName = req.body.name;
  const favType = req.body.type;
  const favUrl = req.body.url;

  try {
    if (await Favourite.findOne({ name: favName })) {
      return res.status(500).json("already exists");
    }

    const favourite = new Favourite({
      name: favName,
      type: favType,
      url: favUrl,
    });

    await favourite.save();

    return res.status(201).json({ message: "saved" });
  } catch (error) {
    console.log(error);
    return res.status(500).json("already exists");
  }
});

mongoose
  //   .connect("mongodb://localhost:27017/swfavourites")
  //   .connect("mongodb://host.docker.internal:27017/swfavourites") // localhost replaced with host.docker.internal for container to host machine communication
  .connect("mongodb://172.17.0.2:27017/swfavourites") // got the url `172.17.0.2` usign the command docker container inspect mongodb (container name)
  .then(() => {
    console.log("connected");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((err) => console.log({ err }));
