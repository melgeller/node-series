const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SerieSchema = new Schema(
  {
    name: { type: String, required: true },
    creator: { type: String, required: false },
    year: { type: Number, required: false },
    characters: [{ type: Schema.Types.ObjectId, ref: "characters" }],
  },
  { timestamps: true }
);

const Serie = mongoose.model("series", SerieSchema);
module.exports = Serie;
