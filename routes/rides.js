const express = require("express");
const router = express.Router();
const rideController = require("../controllers/rideController");

router.post("/", rideController.createRide);
router.get("/", rideController.getRides);

module.exports = router;
