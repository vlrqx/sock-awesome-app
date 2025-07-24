const DesignsocksController = require('../controllers/designSocksController');
const verifyAccessToken = require('../middlevares/verifyAccessToken');
const designRouter = require('express').Router();

designRouter.post(
  '/tofavorite',
  verifyAccessToken,
  DesignsocksController.createDesignFavourite,
);
designRouter.post('/tocart', verifyAccessToken, DesignsocksController.createDesingCart);
designRouter.put('/favorite', verifyAccessToken, DesignsocksController.editDesign);

module.exports = designRouter;
