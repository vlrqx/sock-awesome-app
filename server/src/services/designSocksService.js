const { DesignSock, Favorite, Cart } = require('../../db/models');

class DesignsocksService {
  static async createDesignFavorite(id, data) {
    const design = await DesignSock.create(data);
    await Favorite.create({ userId: id, designSockId: design.id });
    return design;
  }

  static async createDesignCart(id, data) {
    const design = await DesignSock.create(data);
    await Cart.create({ userId: id, designSockId: design.id });
    return design;
  }

  static async editDesign(id, data) {
    return DesignSock.update(data, { where: { id }, returning: true });
  }
}

module.exports = DesignsocksService;
