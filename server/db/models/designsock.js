'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DesignSock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DesignSock.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'owner',
      });
      DesignSock.hasMany(models.Cart, {
        foreignKey: 'designSockId',
      });
    }
  }
  DesignSock.init(
    {
      userId: DataTypes.INTEGER,
      color: DataTypes.STRING,
      pattern: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'DesignSock',
    },
  );
  return DesignSock;
};
