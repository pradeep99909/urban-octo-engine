const express = require("express");
const app = express.Router();
const controllers = require("../controllers");

app.get("/data", controllers.adminControllers.data);

module.exports = app;
