const express = require("express");
const router = express.Router();
const parksController = require("../controllers/parks");
const Park = require("../models/Park"); 
router.get("/", parksController.getParks);

module.exports = router;
