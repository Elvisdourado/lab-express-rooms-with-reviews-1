const mongoose = require("mongoose");

const roomSchema = new Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  reviews: [],
});

module.exports = mongoose.model("Room", UserSchema);