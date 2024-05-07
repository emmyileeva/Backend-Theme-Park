const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  thrillLevel: { type: Number, required: true },
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;
