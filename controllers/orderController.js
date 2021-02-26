const { Vendor, Dish, MenuDish, Request } = require("../models/index");
class OrderController {
  static async createNewOrder(req, res, next) {
    try {
      const menuDishId = +req.params.menuDishId;
      const menuDish = await MenuDish.findByPk(menuDishId);
      if (menuDish) {
        const payload = {
          special: req.body.special,
          quantity: +req.body.quantity,
          MenuDishId: +req.params.menuDishId,
        };
        const request = await Request.create(payload);
        res.status(201).json(request);
      } else {
        throw {
          status: 404,
          message: "Menu Not Found",
        };
      }
    } catch (error) {
      next(error);
    }
  }
  static async getAllOrder(req, res, next) {
    try {
      const request = await Request.findAll({
        include: [
          {
            model: MenuDish,
          },
        ],
      });
      res.status(200).json(request)
    } catch (error) {
      next(error);
    }
  }
}
module.exports = OrderController;
