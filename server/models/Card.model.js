const mongoose = require("mongoose");

const RFID = new mongoose.Schema(
  {
    card_id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RFID", RFID);
