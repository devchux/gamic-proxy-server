const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { authRouter, statsRouter, dashboardRouter } = require("./routes");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.y8ayguc.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/auth", authRouter);
app.use("/stats", statsRouter);
app.use("/dashboard", dashboardRouter);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log("database connected successfully");
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
