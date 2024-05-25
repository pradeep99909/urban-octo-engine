const express = require("express");
const router = express.Router();
const routes = require("./");

//router.use("/admin", routes.adminRoutes);
//router.use("/cart", routes.cartRoutes);
router.use("/order", routes.orderRoutes);

module.exports = router;