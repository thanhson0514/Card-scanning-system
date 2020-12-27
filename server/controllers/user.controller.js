const User = require('../models/User.model');

exports.getUser = async (req, res) => {
  try {
    const user = await User(req.id);

    res.status(200).json({
      message: "get single user",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
      success: false,
    });
  }
};