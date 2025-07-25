const FavoriteService = require('../services/favoriteService');
const cartService = require('../services/cartService');

class FavoriteController {
  static async getUserFavorite(req, res) {
    try {
      const { userId } = req.params;
      const cartItems = await FavoriteService.getUserFavorite(userId);
      res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async addToFavorite(req, res) {
    try {
      const { userId, designSock } = req.body;
      if (!userId || !designSock) {
        return res.status(400).json({ message: 'Требуется userId и designSock' });
      }
      const newCartItem = await FavoriteService.addToFavorite(userId, designSock);
      res.status(201).json({ newCartItem });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async addToCart(req, res) {
    try {
      const { userId, designSock } = req.body;
      if (!userId || !designSock) {
        return res.status(400).json({ message: 'Требуется userId и designSock' });
      }
      const newCartItem = await cartService.addToCart(userId, designSock);
      res.status(201).json({ newCartItem });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async removeFromFavorite(req, res) {
    try {
      await FavoriteService.removeFromFavorite(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async clearFavorite(req, res) {
    try {
      const { userId } = req.params;
      await FavoriteService.clearFavorite(userId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = FavoriteController;
