const express = require("express");

const Router = express.Router();

// middlewares
// const { register } = require("../middlewares/scan_card");

// general
const { postData, register } = require("../controllers/admin.controller");
const { getUser } = require("../controllers/user.controller");
const { checkCard, getCard } = require("../controllers/card.controller");

// Router user
Router
    .route("/user")
    .get(getUser);

// Router card
Router
    .route("/card")
    .post(checkCard)
    .get(getCard);

// Router admin
Router
    .route("/admin")
    .post(postData)

Router
    .route("/admin/register")
    .post(register);

module.exports = Router;
