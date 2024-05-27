const express = require("express");
const app = express.Router();
const controllers = require("../controllers");

app.get("/", controllers.productControllers.getAllProducts);

module.exports = app;
