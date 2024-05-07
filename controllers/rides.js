const Ride = require("../models/Ride");

exports.createRide = async (req, res) => {
  try {
    const ride = await Ride.create(req.body);
    res.status(201).json(ride);
  } catch (error) {
    console.error("Error creating ride:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.status(200).json(rides);
  } catch (error) {
    console.error("Error fetching rides:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
