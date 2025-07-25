const AuthController = require('../controllers/authController');

const authRouter = require('express').Router();

authRouter.post('/signup', AuthController.signup);
authRouter.delete('/logout', AuthController.logout);
authRouter.get('/refresh', AuthController.refresh);
authRouter.post('/signin', AuthController.login);

module.exports = authRouter;
