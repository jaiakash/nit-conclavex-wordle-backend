const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    score: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
