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
    await queryInterface.bulkInsert("Vendors", [
      {
        name: "Jolly Joy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Awesome Eat",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Baratie",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ichiraku",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sanji's Food",
        createdAt: new Date(),
        updatedAt: new Date()
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
    await queryInterface.bulkDelete("Vendors", null, {});
  },
};
