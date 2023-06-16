if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
};
