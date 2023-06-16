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

//  V2
router.get(
  "/airdrop-volume-trend-v2",
  requestMiddleware(`https://gamic.app/stats/airdrop-volume-trend-v2`)
);

router.get(
  "/airdrop-count-trend-v2",
  requestMiddleware(`https://gamic.app/stats/airdrop-count-trend-v2`)
);

router.get(
  "/swap-volume-trend",
  requestMiddleware(`https://gamic.app/stats/swap-volume-trend`)
);

router.get(
  "/swap-count-trend",
  requestMiddleware(`https://gamic.app/stats/swap-count-trend`)
);
// V2

router.get(
  "/swap-volume-trend-v2",
  requestMiddleware(`https://gamic.app/stats/swap-volume-trend-v2`)
);

router.get(
  "/swap-count-trend-v2",
  requestMiddleware(`https://gamic.app/stats/swap-count-trend-v2`)
);

router.get(
  "/transfer-volume-trend",
  requestMiddleware(`https://gamic.app/stats/transfer-volume-trend`)
);

router.get(
  "/transfer-count-trend",
  requestMiddleware(`https://gamic.app/stats/transfer-count-trend`)
);
// V2
router.get(
  "/transfer-volume-trend-v2",
  requestMiddleware(`https://gamic.app/stats/transfer-volume-trend-v2`)
);

router.get(
  "/transfer-count-trend-v2",
  requestMiddleware(`https://gamic.app/stats/transfer-count-trend-v2`)
);

router.get(
  "/transactions-type",
  requestMiddleware(`https://gamic.app/stats/transactions-type`)
);

module.exports = router;
