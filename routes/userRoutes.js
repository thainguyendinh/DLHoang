const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.posr("/login", authContrller.login);

module.exports = router;
