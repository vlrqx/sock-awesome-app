const express = require('express');
const   router = express.Router();
const FavoriteController = require('../controllers/favoriteController');

router.get('/:userId', FavoriteController.getUserFavorite);
router.post('/', FavoriteController.addToFavorite);
router.delete('/item/:id', FavoriteController.removeFromFavorite);
router.delete('/clear/:userId', FavoriteController.clearFavorite);

module.exports = router;