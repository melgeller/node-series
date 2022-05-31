const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: false },
    picture: { type: String, required: true },
  },
  { timestamps: true }
);

const Character = mongoose.model("characters", CharacterSchema);

module.exports = Character;