const crypto = require("crypto");

function generateCouponCode(length) {
  return crypto
    .randomBytes(length)
    .toString("base64")
    .slice(0, length)
    .replace(/\+/g, "0")
    .replace(/\//g, "1");
}

module.exports = {
  generateCouponCode,
};
