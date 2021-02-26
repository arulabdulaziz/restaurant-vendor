const route = require("express").Router();
const OrderController = require("../controllers/orderController");

route.get("/", OrderController.getAllOrder)
route.post("/:menuDishId", OrderController.createNewOrder);

module.exports = route;
