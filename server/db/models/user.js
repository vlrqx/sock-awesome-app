'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.DesignSock, {
        foreignKey: 'userId',
        as: 'designs',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.Cart, {
        foreignKey: 'userId',
        as: 'cartItems',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hashpass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
