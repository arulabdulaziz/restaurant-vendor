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
    await queryInterface.bulkInsert("Dishes", [
      {
        name: "Noodle Hot Plate",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Curros",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ayam Betutu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Laksa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spagethie",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kuskus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tom Yam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Scrumble Egg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seafood Bolognese",
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
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};
