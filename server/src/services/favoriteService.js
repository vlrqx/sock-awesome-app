const { Favorite, DesignSock } = require('../../db/models');

class FavoriteService {
  static async getUserFavorite(userId) {
    const allFavorite = await Favorite.findAll({
      where: { userId },
      include: [{ model: DesignSock, as: 'fav' }],
    });
    return allFavorite;
  }

  static async addToFavorite(userId, designSockId) {
    const favoriteItem = await Favorite.create({ userId, designSockId });
    return favoriteItem;
  }

  static async removeFromFavorite(favoriteId) {
    const favoriteItem = await Favorite.findByPk(favoriteId);
    if (!favoriteItem) {
      throw new Error('Товар в избранном не найден');
    }
    await favoriteItem.destroy();
  }

  static async clearFavorite(userId) {
    await Favorite.destroy({ where: { userId } });
  }
}

module.exports = FavoriteService;
