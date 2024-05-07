const express = require("express");
const router = express.Router();
const parksController = require("../controllers/parks");

router.post("/", parksController.createPark);
router.get("/", parksController.getParks);

module.exports = router;
