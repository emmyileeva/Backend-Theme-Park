const mongoose = require('mongoose');
const {DATABASE_URI} = process.env
require("dotenv").config();
require('./config/db.connection.js')

mongoose.connect(DATABASE_URI)

mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));