const express = require("express");
const router = express.Router();
const parksController = require("../controllers/parks");

router.get("/", parksController.getParks);

module.exports = router;
