const { Cart, DesignSock } = require('../../db/models');

class CartService {
  static async getUserCart(userId) {
    const allCart = await Cart.findAll({
      where: { userId },
      include: [
        // { model: User, attributes: ['id', 'name', 'email'] },
        { model: DesignSock, as: 'as' },
      ],
    });
    // const allCart = await Cart.findByPk(userId)
    return allCart;
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

module.exports = CartService;
