const express = require("express");
const app = express.Router();
const controllers = require("../controllers");

app.get("/", controllers.orderControllers.getAllOrders);

app.post("/", controllers.orderControllers.addOrder);

app.get("/:orderId", controllers.orderControllers.getOrder);

app.patch("/:orderId", controllers.orderControllers.updateOrder);

app.delete("/:orderId", controllers.orderControllers.cancelOrder);

module.exports = app;
