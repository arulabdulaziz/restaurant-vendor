"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("MenuDishes", [
      {
        VendorId: 1,
        DishId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 2,
        DishId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 3,
        DishId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 4,
        DishId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 5,
        DishId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 1,
        DishId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 2,
        DishId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 3,
        DishId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 4,
        DishId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 5,
        DishId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 1,
        DishId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 2,
        DishId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 3,
        DishId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 4,
        DishId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        VendorId: 5,
        DishId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("MenuDishes", null, {});
  },
};
