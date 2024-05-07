const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controllers/authController");


const { User } = require("../models/User");


router.post("/register", Register);
router.post("/login", Login);

module.exports = router;
