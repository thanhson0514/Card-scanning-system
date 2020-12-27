const Card = require("../models/Card.model");

exports.authentication = async (req, res, next) => {
  const { card_id } = req.body;
  try {
    const card = await Card.find(
      { card_id },
      {
        card_id: 0,
      }
    );
    if (!card.length) {
      req.id = null;
      next();
    }

    req.id = card_id;
    next();
  } catch (err) {
    req.id = null;
    next();
  }
};