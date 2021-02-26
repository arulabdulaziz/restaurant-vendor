const route = require("express").Router();
const VendorController = require("../controllers/vendorController");

route.get("/", VendorController.getAllVendor);
route.post("/", VendorController.createVendor);
route.put("/:id", VendorController.updateVendor);
route.delete("/:id", VendorController.deleteVendor);
route.get("/:id", VendorController.getBendorById);

module.exports = route;
