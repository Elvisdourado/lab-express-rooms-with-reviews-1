const mongoose = require("mongoose");

const roomSchema = new Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model("Room", UserSchema);