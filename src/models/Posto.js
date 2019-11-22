const mongoose = require("mongoose");

const PostoSchema = new mongoose.Schema({
  posto: String,
});

module.exports = mongoose.model("Posto", PostoSchema);