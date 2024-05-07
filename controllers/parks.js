const { Park } = require("../models");

exports.createPark = async (req, res) => {
  try {
    const park = await Park.create(req.body);
    res.status(201).json(park);
  } catch (error) {
    console.error("Error creating park:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getParks = async (req, res) => {
  try {
    const parks = await Park.find();
    res.status(200).json(parks);
  } catch (error) {
    console.error("Error fetching parks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
