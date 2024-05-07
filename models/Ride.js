const mongoose = require("mongoose");
const parkSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, required: true },
  thrilledLevel: { type: Number, required: true },
});

const park = mongooose.model("Ride", rideSchema);

module.exports = Ride;
