const express = require("express");
const { requestMiddleware } = require("../utils/helper");

const router = express.Router();

router.get(
  "/online-activity",
  requestMiddleware(`https://gamic.app/stats/online-activity`)
);

router.get(
  "/airdrop-count",
  requestMiddleware(`https://gamic.app/stats/airdrop-count`)
);

router.get(
  "/wallet-count",
  requestMiddleware(`https://gamic.app/stats/wallet-count`)
);

module.exports = router;
