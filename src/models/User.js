const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user: String,
  senha: String
});

module.exports = mongoose.model("User", UserSchema);
