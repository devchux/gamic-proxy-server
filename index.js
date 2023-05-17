// const { default: axios } = require("axios");
const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/summary", async (req, res) => {
  try {
    // const { data } = await axios.get("https://gamic.app/api/dashboard/summary");

    // res.status(200).json(data);

    const response = await fetch("https://gamic.app/api/dashboard/summary");

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res
      .status(error?.response?.status || 400)
      .json(error?.response?.data || error.message);
    // res.status(error.response.status).json(error.response.data);
  }
});

app.get("/guilds", async (req, res) => {
  const { current, size } = req.query;
  try {
    // const { data } = await axios.get(
    //   `https://gamic.app/api/dashboard/guilds?current=${current}&size=${size}`
    // );

    // res.status(200).json(data);

    const response = await fetch(
      `https://gamic.app/api/dashboard/guilds?current=${current}&size=${size}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    // res.status(error.response.status).json(error.response.data);
    res
      .status(error?.response?.status || 400)
      .json(error?.response?.data || error.message);
  }
});

// app.listen(port, () => {
//   console.log("App is running on port: ", port);
// });

module.exports = app;
