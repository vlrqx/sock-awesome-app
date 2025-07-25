const express = require('express');
const   router = express.Router();
const FavoriteController = require('../controllers/favoriteController');
const verifyAccessToken = require('../middlevares/verifyAccessToken');

router.get('/:userId', verifyAccessToken, FavoriteController.getUserFavorite);
router.post('/', verifyAccessToken, FavoriteController.addToFavorite);
router.delete('/item/:id', verifyAccessToken, FavoriteController.removeFromFavorite);
router.delete('/clear/:userId', verifyAccessToken, FavoriteController.clearFavorite);


module.exports = router;