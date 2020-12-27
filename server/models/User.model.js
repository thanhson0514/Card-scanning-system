const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    auto: true,
  },
  card_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RFID",
  },
});

module.exports = mongoose.model("User", User);
