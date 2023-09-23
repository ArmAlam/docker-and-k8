const { Schema, model } = require("mongoose");

const favouriteSchema = new Schema({
  text: String,
  type: String,
  url: String,
});

const FavouriteModel = model("Favourite", favouriteSchema);

module.exports = FavouriteModel;
