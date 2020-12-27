const Card = require("../models/Card.model");

exports.checkCard = async (req, res, next) => {
  const io = req.app.locals.io;
  if (!req.id) {
    return res.status(403).json({
      success: false
    })
  }
  try {
    const card = await Card.find(req.card_id, {
      card_id: 0,
    });

    io.emit("user", {
      name: card[0].name,
      message: "ID card is valid!",
      date: new Date,
      success: true,
    });

    res.status(200).json({
      username: card.name,
      message: "ID card is valid!",
      success: true,
    });

  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Can not find id card!",
      success: false,
    });
  }
};

exports.getCard = async (req, res) => {
  const { card_id } = req.body;
  try {
    const card = await Card.find({card_id: card_id}, {card_id: 0});
    const [{ name }] = card;

    res.status(200).json({
      message: 'Get info user',
      name: name
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error server",
      success: false,
    });
  }
};
