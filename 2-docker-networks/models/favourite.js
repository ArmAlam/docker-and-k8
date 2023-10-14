const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
  text: String,
  type: String,
  url: String,
});

const FavouriteModel = mongoose.model("Favourite", favouriteSchema);

module.exports = FavouriteModel;
