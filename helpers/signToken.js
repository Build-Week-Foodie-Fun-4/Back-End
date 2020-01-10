const configSecret = require("../config/secret");
const jwt = require("jsonwebtoken");

module.exports = user => {
  const payload = {
    username: user.username
  };

  const secret = configSecret.jwtSecret;

  const options = {
    expiresIn: "24h"
  };

  return jwt.sign(payload, secret, options);
};
