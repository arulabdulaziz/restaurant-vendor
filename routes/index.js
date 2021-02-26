const router = require("express").Router();
const vendorRoute = require("./vendorRoute");
const dishRoute = require("./dishRoute");
const orderRoute = require("./orderRoute")

router.use("/vendor", vendorRoute);
router.use("/dish", dishRoute);
router.use("/order", orderRoute)

module.exports = router;
