const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const userModel = require("../models/users");

const { errorResponse } = require("../utils/helper");

exports.authUser = async (req, res, next) => {
  try {
    let tmp = req.header("Authorization");
    if (!tmp) return res.status(400).json({ message: "Authorization missing" });
    const token = tmp.replace("Bearer ", "");
    if (!token) {
      return res.status(400).json({ message: "Invalid Authentification" });
    }
    decode = jwt.verify(token, JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    errorResponse(res, error);
  }
};

exports.authAdmin = async (req, res, next) => {
  try {
    const { id } = req.user;
    const adminUser = await userModel.findOne({ _id: id }).exec();
    if (adminUser.userRole === 0) {
      res.status(403).json({
        error: "Admin resource. Access denied",
      });
    } else {
      next();
    }
  } catch (error) {
    errorResponse(res, error);
  }
};
