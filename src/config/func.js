/* This all of are helper function */
const userModel = require("../models/users");

exports.toTitleCase = function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

exports.validateEmail = function (mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    return false;
  }
};

exports.emailCheckInDatabase = async function (email) {
  let user = await userModel.findOne({ email: email });
  user.exec((err, data) => {
    if (!data) {
      return false;
    } else {
      return true;
    }
  });
};

exports.validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};
