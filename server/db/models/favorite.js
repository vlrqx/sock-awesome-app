'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.DesignSock, { foreignKey: 'designSockId', as: 'fav' });
      Favorite.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Favorite.init(
    {
      userId: DataTypes.INTEGER,
      designSockId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favorite',
    },
  );
  return Favorite;
};
