const express = require("express");
const app = express.Router();
const controllers = require("../controllers");

app.get("/", controllers.cartControllers.getUserCart);

app.post("/", controllers.cartControllers.addToUserCart);

app.patch("/:cartId", controllers.cartControllers.updateUserCart);

app.delete("/", controllers.cartControllers.deleteUserCart);

app.delete("/:cartId", controllers.cartControllers.deleteItemCart);
