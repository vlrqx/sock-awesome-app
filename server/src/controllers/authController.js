const cookieConfig = require('../configs/cookieConfig');
const AuthService = require('../services/authService');
const generateTokens = require('../utils/generateToken');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthController {
  static async signup(req, res) {
    try {
      const user = await AuthService.createUser(req.body);

      // generate token

      console.log({ user });

      const { accessToken, refreshToken } = generateTokens({ user });

      console.log({ refreshToken });

      res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }

  static async logout(req, res) {
    res.clearCookie('refreshToken');
    res.sendStatus(204);
  }

  static async refresh(req, res) {
    try {
      const { refreshToken: oldRefreshToken } = req.cookies;
      const { user } = jwt.verify(oldRefreshToken, process.env.REFRESH_TOKEN_SECRET);

      const { accessToken, refreshToken } = generateTokens({ user });

      res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }

  static async login(req, res) {
    try {
      const user = await AuthService.verifyUser(req.body);

      // generate token

      const { accessToken, refreshToken } = generateTokens({ user });

      res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json({ user, accessToken });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = AuthController;
