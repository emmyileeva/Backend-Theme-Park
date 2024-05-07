const mongoose = require("mongoose");

const parkSchema = new mongoose.Schema({
  name: { type: String, require: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  admissionPrice: { type: String, required: true },
  capacity: { type: String, required: true },
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;
