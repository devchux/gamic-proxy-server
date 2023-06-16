// const fetch = require("node-fetch");
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const { errorResponse } = require("./src/utils/helper");

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// app.get("/summary", async (req, res) => {
//   try {
//     const response = await fetch("https://gamic.app/api/dashboard/summary");

//     const data = await response.json();

//     res.status(200).json(data);
//   } catch (error) {
//     errorResponse(res, error);
//   }
// });

// app.get("/summary2", async (req, res) => {
//   try {
//     const response = await fetch("https://gamic.app/api/dashboard/summary2");

//     const data = await response.json();

//     res.status(200).json(data);
//   } catch (error) {
//     errorResponse(res, error);
//   }
// });

// app.get("/guilds", async (req, res) => {
//   const { current, size } = req.query;
//   try {
//     const response = await fetch(
//       `https://gamic.app/api/dashboard/guilds?current=${current}&size=${size}`
//     );

//     const data = await response.json();

//     res.status(200).json(data);
//   } catch (error) {
//     errorResponse(res, error);
//   }
// });

// mongoose
//   .connect(
//     "mongodb+srv://olabanji:fKuHMqMmKmASTW3Q@cluster0.y8ayguc.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then((result) => {
//     console.log(result);
//     app.listen(3000);
//     // module.exports = app;
//   })
//   .catch((err) => {
//     console.log(err);
//   });
