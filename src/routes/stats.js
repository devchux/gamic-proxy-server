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

router.get(
  "/airdrop-volume-trend",
  requestMiddleware(`https://gamic.app/stats/airdrop-volume-trend`)
);

router.get(
  "/airdrop-count-trend",
  requestMiddleware(`https://gamic.app/stats/airdrop-count-trend`)
);

router.get(
  "/swap-volume-trend",
  requestMiddleware(`https://gamic.app/stats/swap-volume-trend`)
);

router.get(
  "/swap-count-trend",
  requestMiddleware(`https://gamic.app/stats/swap-count-trend`)
);

router.get(
  "/transfer-volume-trend",
  requestMiddleware(`https://gamic.app/stats/transfer-volume-trend`)
);

router.get(
  "/transfer-count-trend",
  requestMiddleware(`https://gamic.app/stats/transfer-count-trend`)
);

module.exports = router;
