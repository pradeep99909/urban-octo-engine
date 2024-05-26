const express = require("express");
const app = express.Router();
const controllers = require("../controllers");
const middleware = require("../middleware");

app.get(
  "/",
  middleware.userMiddleware.userValidation,
  controllers.cartControllers.getUserCart
);

app.post(
  "/",
  middleware.userMiddleware.userValidation,
  controllers.cartControllers.addToUserCart
);

app.patch(
  "/:cartId",
  middleware.userMiddleware.userValidation,
  controllers.cartControllers.updateUserCart
);

app.delete(
  "/",
  middleware.userMiddleware.userValidation,
  controllers.cartControllers.deleteUserCart
);

app.delete(
  "/:cartId",
  middleware.userMiddleware.userValidation,
  controllers.cartControllers.deleteItemCart
);

module.exports = app;
