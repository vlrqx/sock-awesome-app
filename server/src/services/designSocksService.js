const { DesignSock, Favorite, Cart } = require('../../db/models');

class DesignsocksService {
  static async createDesignFavorite(id, data) {
    const design = await DesignSock.create({ userId: id, ...data.designSock });
    await Favorite.create({ userId: id, designSockId: design.id });
    return design;
  }

  static async createDesignCart(id, data) {
    const design = await DesignSock.create({ userId: id, ...data.designSock });
    await Cart.create({ userId: id, designSockId: design.id });
    return design;
  }

  static async editDesign(id, data) {
    return DesignSock.update(data, { where: { id }, returning: true });
  }

  static async createDesign(data) {
    const create = await DesignSock.create(data);
    return create;
  }
}

module.exports = DesignsocksService;
