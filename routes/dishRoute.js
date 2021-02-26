const route = require("express").Router();
const DishController = require("../controllers/dishController");

route.get("/:vendorId/:dishId", DishController.getDishForSpecificVendor);

module.exports = route;
