require("dotenv").config();
require("./config/db.connection");
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

const parksRouter = require("./routes/parks");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/parks", parksRouter);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
