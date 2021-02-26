const { Vendor, Dish, MenuDish, Request } = require("../models/index");
class DishController {
  static async getDishForSpecificVendor(req, res, next) {
    const vendorId = +req.params.vendorId;
    const dishId = +req.params.dishId;
    try {
      const menuDish = await MenuDish.findOne({
        where: {
          VendorId: vendorId,
          DishId: dishId,
        },
        include: [
          {
            model: Dish,
          },
          {
            model: Vendor,
          },
        ],
      });
      if (menuDish) {
        res.status(200).json(menuDish);
      } else {
        throw {
          status: 404,
          message: "Data Not Found",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = DishController;
