const express = require("express");
const { requestMiddleware } = require("../utils/helper");

const router = express.Router();

router.get("/summary", requestMiddleware("https://gamic.app/api/dashboard/summary"));

router.get("/summary2", requestMiddleware("https://gamic.app/api/dashboard/summary2"));

router.get("/guilds", requestMiddleware("https://gamic.app/api/dashboard/guilds"));

module.exports = router;
