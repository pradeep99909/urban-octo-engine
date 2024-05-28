const express = require("express");
const app = express.Router();
const controllers = require("../controllers");
const middleware = require("../middleware");

app.get(
  "/",
  middleware.userMiddleware.userValidation,
  controllers.orderControllers.getAllOrders
);

app.post(
  "/",
  middleware.userMiddleware.userValidation,
  controllers.orderControllers.addOrder
);

app.get(
  "/:orderId",
  middleware.userMiddleware.userValidation,
  controllers.orderControllers.getOrder
);

app.patch(
  "/:orderId",
  middleware.userMiddleware.userValidation,
  controllers.orderControllers.updateOrder
);

app.delete(
  "/:orderId",
  middleware.userMiddleware.userValidation,
  controllers.orderControllers.cancelOrder
);

app.post(
  "/verify",
  middleware.userMiddleware.userValidation,
  controllers.orderControllers.verifyCouponCode
);

module.exports = app;
