const express = require("express");
const router = express.Router();
const ridesController = require("../controllers/rides");

router.get("/", ridesController.getRides);

module.exports = router;
