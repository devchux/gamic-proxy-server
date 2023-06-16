const { validateEmail, validateLength } = require("../config/func");
const bcrypt = require("bcryptjs");
const userModel = require("../models/users");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

const { errorResponse } = require("../utils/helper");

exports.postIsAdmin = async (req, res, next) => {
  let { loggedInUserId } = req.body;
  try {
    let loggedInUserRole = await userModel.findById(loggedInUserId);
    res.status(200).json({ role: loggedInUserRole.userRole });
  } catch (error) {
    errorResponse(res, error);
  }
};

exports.postRegister = async (req, res, next) => {
  try {
    let { email, password, cPassword } = req.body;
    let error = {};
    if (!email || !password || !cPassword) {
      error = {
        ...error,
        email: "Filed must not be empty",
        password: "Filed must not be empty",
        cPassword: "Filed must not be empty",
      };
      return res.status(400).json({ error });
    }

    if (!validateLength(password, 6, 40)) {
      error = { ...error, password: "Password must be atleast 6 characters." };
      return res.status(400).json({ error });
    }

    if (password !== cPassword) {
      error = { ...error, cPassword: "Passwords do not match" };

      return res.status(400).json({ error });
    }

    let userEmailExist = await userModel
      .findOne({
        email: email.toLowerCase(),
      })
      .exec();

    if (userEmailExist) {
      error = { ...error, email: "Email address already exist" };
      return res.status(400).json({ error });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    const newUser = await new userModel({
      email,
      password: cryptedPassword,
      userRole: 0,
    }).save();

    res.status(201).json({
      message: "Dashboard user registration successful",
    });
  } catch (error) {
    errorResponse(res, error);
  }
};

exports.postSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message:
          "The email address you entered is not connected to an account.",
      });
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(400).json({
        message: "Invalid credentials. Please try again.",
      });
    }

    const token = jwt.sign({ _id: user._id, role: user.userRole }, JWT_SECRET);
    const encode = jwt.verify(token, JWT_SECRET);

    return res.status(200).json({
      token: token,
      user: encode,
    });
  } catch (error) {
    errorResponse(res, error);
  }
};
