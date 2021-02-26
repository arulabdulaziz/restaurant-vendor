const { Vendor, Dish, MenuDish, Request } = require("../models/index");
class VendorController {
  static async getAllVendor(req, res, next) {
    try {
      const vendors = await Vendor.findAll();
      res.status(200).json(vendors);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async getBendorById(req, res, next) {
    try {
      const id = +req.params.id;
      const vendor = await Vendor.findByPk(id);
      if (vendor) {
        res.status(200).json(vendor);
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
  static async createVendor(req, res, next) {
    try {
      const name = {
        name: req.body.name,
      };
      const vendor = await Vendor.create(name);
      res.status(201).json(vendor);
    } catch (error) {
      next(error);
    }
  }
  static async updateVendor(req, res, next) {
    try {
      const id = +req.params.id;
      const name = {
        name: req.body.name,
      };
      const vendor = await Vendor.findByPk(id);
      if (vendor) {
        const vendorUpdated = await Vendor.update(name, {
          where: { id: id },
          returning: true,
        });
        res.status(200).json(vendorUpdated);
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
  static async deleteVendor(req, res, next) {
    try {
      const id = +req.params.id;
      const vendor = await Vendor.findByPk(id);
      if (vendor) {
        const vendorDeleted = await Vendor.destroy({
          where: { id: id },
        });
        await MenuDish.destroy({
          where: {
            VendorId: id,
          },
        });
        res.status(200).json(vendorDeleted);
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
module.exports = VendorController;
