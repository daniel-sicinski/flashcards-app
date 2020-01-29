const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  _id: String,
  expressions: {
    engWord: String,
    polWord: String,
    engSen: String,
    polSen: String
  },
  audioIds: {
    engWordTrackId: String,
    polWordTrackId: String,
    engSenTrackId: String,
    polSenTrackId: String
  },
  category: String
});

module.exports = mongoose.model("Card", cardSchema);
