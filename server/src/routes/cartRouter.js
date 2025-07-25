const express = require('express');
const   router = express.Router();
const cartController = require('../controllers/cartController');
const verifyAccessToken = require('../middlevares/verifyAccessToken');

router.get('/:userId', verifyAccessToken, cartController.getUserCart);
router.post('/', verifyAccessToken, cartController.addToCart);
router.delete('/item/:id', verifyAccessToken, cartController.removeFromCart);
router.delete('/clear/:userId', verifyAccessToken, cartController.clearCart);

module.exports = router;
