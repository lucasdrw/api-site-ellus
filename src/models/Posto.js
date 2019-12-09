const mongoose = require("mongoose");
const paginate = require("mongoose-paginate");

const PostoSchema = new mongoose.Schema({
  posto: String,
});

PostoSchema.plugin(paginate);

module.exports = mongoose.model("Posto", PostoSchema);