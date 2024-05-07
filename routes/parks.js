const express = require("express");
const router = express.Router();
const { Park } = require("../models/park")

const parksController = require("../controllers/parks");

router.get("/", parksController.index);

module.exports = router;
