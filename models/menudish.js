'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuDish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MenuDish.belongsTo(models.Vendor)
      MenuDish.belongsTo(models.Dish)
      MenuDish.hasMany(models.Request)
    }
  };
  MenuDish.init({
    VendorId: DataTypes.INTEGER,
    DishId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MenuDish',
  });
  return MenuDish;
};