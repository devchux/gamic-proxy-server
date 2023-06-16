const path = require("path");

const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

router.post("/register", authController.postRegister);
router.post("/login", authController.postSignIn);

module.exports = router;
