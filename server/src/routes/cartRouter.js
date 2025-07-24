const express = require('express');
const   router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/:userId', cartController.getUserCart);
router.post('/', cartController.addToCart);
router.delete('/item/:id', cartController.removeFromCart);
router.delete('/clear/:userId', cartController.clearCart);

module.exports = router;
