const services = require("../services");
const { response } = require("../utils");

const data = (req, res) => {
  try {
    const data = services.adminServices.data();
    return response.successResponse(res, data);
  } catch (error) {
    console.error("file :: admin.controllers.js :: data :: error ::", error);
    return response.errorResponse(res, error);
  }
};

module.exports = {
  data,
};
