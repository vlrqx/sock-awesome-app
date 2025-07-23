'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DesignSocks', [
      {
        userId: 1,
        color: 'Red',
        pattern: 'Polka Dots',
        img: 'red-polka.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        color: 'Blue',
        pattern: 'Stripes',
        img: 'blue-stripes.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        color: 'Green',
        pattern: 'Solid',
        img: 'green-solid.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        color: 'Yellow',
        pattern: 'Argyle',
        img: 'yellow-argyle.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        color: 'Black',
        pattern: 'Checkerboard',
        img: 'black-checker.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DesignSocks', null, {});
  },
};
