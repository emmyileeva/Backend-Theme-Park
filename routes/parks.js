const express = require("express");
const router = express.Router();
const parksController = require("../controllers/parks");
const Park = require("../models/Park"); 
router.get("/parks", parksController.getParks);

module.exports = router;
