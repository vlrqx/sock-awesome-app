const cartService = require('../services/cartService');

class CartController {
  static async getUserCart(req, res) {
    try {
        const { userId } = req.params
    //   const userId = parseInt(req.params.userId);
      const cartItems = await cartService.getUserCart(userId);
      res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async addToCart(req, res) {
    try {
      const { userId, designSockId } = req.body;
      console.log(userId, designSockId)
      if (!userId || !designSockId) {
        return res.status(400).json({ message: 'Требуется userId и designSock' });
      }
      const newCartItem = await cartService.addToCart(userId, designSockId);
      res.status(201).json({ newCartItem });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async removeFromCart(req, res) {
    try {
        const { cartId } = req.params
    //   const cartId = parseInt(req.params.id);
      await cartService.removeFromCart(cartId);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async clearCart(req, res) {
    try {
        const { userId } = req.params

    //   const userId = parseInt(req.params.userId);
      await cartService.clearCart(userId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = CartController;
