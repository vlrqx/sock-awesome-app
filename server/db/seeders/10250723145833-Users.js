'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Alice',
        email: 'alice@example.com',
        hashpass: 'hashed_password_1', // допустим, пока просто плейсхолдер
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob',
        email: 'bob@example.com',
        hashpass: 'hashed_password_2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Charlie',
        email: 'charlie@example.com',
        hashpass: 'hashed_password_3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Diana',
        email: 'diana@example.com',
        hashpass: 'hashed_password_4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eden',
        email: 'eden@example.com',
        hashpass: 'hashed_password_5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
