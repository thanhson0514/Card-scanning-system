const Card = require("../models/Card.model");
const User = require("../models/User.model");

exports.postData = async (req, res) => {
  const io = req.app.locals.io;
  const { card_id } = req.body;
  try {
    io.emit("data", {
      message: "The ID card is not available!",
      name: "Anonymous",
      card_id: card_id,
      date: new Date(),
    });

    return res.status(202).json({
      message: "The ID card is not available!",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error server!",
      success: false,
    });
  }
};

exports.register = async (req, res) => {
  const { name, id } = req.body;
  console.log(name,id);
  try {
    const card = new Card({ card_id: id, name: name });
    await card.save();

    // Data User is same data RFID now. The feature is impove late
    // const user = new User();

    return res.status(201).json({
      message: "Create success.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Account is exists or not valid.",
      success: false,
    });
  }
};
