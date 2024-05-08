require("dotenv").config();
require("./config/db.connection");

const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const ridesRouter = require("./routes/rides");
const parksRouter = require("./routes/parks");
const authRouter = require("./routes/auth");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/parks", parksRouter);
app.get("/rides", ridesRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
