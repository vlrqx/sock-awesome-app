const { Favorite, DesignSock } = require('../../db/models');

class FavoriteService {
  static async getUserFav(userId) {
    const allFav = await Fav.findAll({
      where: { userId },
      include: [
        { model: DesignSock, as: 'as' },
      ],
    });
    return allFav;
  }

  static async addToCart(userId, designSockId) {
    const cartItem = await Cart.create({ userId, designSockId });
    return cartItem;
  }

  static async removeFromCart(cartId) {
    const cartItem = await Cart.findByPk(cartId);
    if (!cartItem) {
      throw new Error('Товар в корзине не найден');
    }
    await cartItem.destroy();
  }

  static async clearCart(userId) {
    await Cart.destroy({ where: { userId } });
  }
}

module.exports = FavoriteService 
