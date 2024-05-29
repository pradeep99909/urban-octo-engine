const express = require("express");
const router = express.Router();
const routes = require("./");

router.use("/admin", routes.adminRoutes);
router.use("/cart", routes.cartRoutes);
router.use("/order", routes.orderRoutes);
router.use("/product", routes.productRoutes);

module.exports = router;
