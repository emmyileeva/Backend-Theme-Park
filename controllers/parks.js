
const express = require("express");
const { Park } = require("../models/park");


exports.getParks = async (req, res) => {
  try {
    const parks = await Park.find();
    res.status(200).json(parks);
  } catch (error) {
    console.error("Error fetching parks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
