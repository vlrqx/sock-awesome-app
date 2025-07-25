const DesignsocksService = require('../services/designSocksService');

class DesignsocksController {
  static async createDesignFavourite(req, res) {
    try {
      const { user } = res.locals;
      const newDesign = await DesignsocksService.createDesignFavorite(user.id, req.body);
      res.json(newDesign);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createDesingCart(req, res) {
    try {
      const { user } = res.locals;
      const newDesign = await DesignsocksService.createDesignCart(user.id, req.body);
      res.json(newDesign);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async editDesign(req, res) {
    try {
      const { id } = req.params;
      const editDesign = await DesignsocksService.editDesign(id, req.body);
      return res.json(editDesign);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createDesign(req, res) {
    try {
      const { design } = req.body;
      const createDesign = await DesignsocksService.createDesign(design);
      return res.json(createDesign);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = DesignsocksController;
