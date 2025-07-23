const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

class AuthService {
  static async createUser({ email, password, name }) {
    if (!email || !password || !name) {
      throw new Error('Не все поля');
    }

    const hashpass = await bcrypt.hash(password, 10);

    const user = await User.create({ email, name, password: hashpass });

    if (!user) {
      throw new Error('Не смог создать артиста');
    }

    const plainUser = user.get();
    delete plainUser.hashpass;

    return plainUser;
  }

  static async verifyUser({ email, password }) {
    if (!email || !password) {
      throw new Error('Не все поля заполнил');
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('Такого пользователя нет');
    }

    const userDBPass = user.password;

    const isValid = await bcrypt.compare(password, userDBPass);

    if (!isValid) {
      throw new Error('Неправильный пароль');
    }

    const plainUser = user.get();
    delete plainUser.password;

    return plainUser;
  }
}

module.exports = AuthService;
