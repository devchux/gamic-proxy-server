const express = require("express");
const cors = require("cors");
const { statsRouter, dashboardRouter } = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/stats", statsRouter);
app.use("/dashboard", dashboardRouter);

module.exports = app;
