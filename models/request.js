'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Request.belongsTo(models.MenuDish)
    }
  };
  Request.init({
    MenuDishId: DataTypes.INTEGER,
    quantity: {type: DataTypes.INTEGER,
    validate: {
      min: {
        args: 1,
        msg: "Quantity min 1"
      }
    }},
    special: {type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: "Fill the special request"
      }
    }}
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};