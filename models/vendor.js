'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.MenuDish)
    }
  };
  Vendor.init({
    name: {type: DataTypes.STRING,
    validate: {
      len: {
        args: [3, 128],
        msg: "Name the Vendor max 128 characters"
      }
    }}
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};