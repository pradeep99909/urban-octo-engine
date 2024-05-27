const services = require("../services");
const { response } = require("../utils");

const getAllProducts = (req, res) => {
  try {
    const data = services.productServices.getAllProducts();
    return response.successResponse(res, data);
  } catch (error) {
    console.error(
      "file::products.controllers.js :: getAllProducts :: error",
      error
    );
    return response.errorResponse(res, error);
  }
};

module.exports = {
  getAllProducts,
};
