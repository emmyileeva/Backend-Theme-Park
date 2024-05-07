const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  thrillLevel: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  heightRestriction: Number,
  capacity: Number,
  park: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Park",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;
