const AuthController = require('../controllers/authController');

const authRouter = require('express').Router();

authRouter.post('/signup', AuthController.signup);
authRouter.delete('/logout', AuthController.logout);
authRouter.get('/refresh', AuthController.refresh);
authRouter.post('/login', AuthController.login);

console.log(authRouter.get('/login', AuthController.login))

module.exports = authRouter;
