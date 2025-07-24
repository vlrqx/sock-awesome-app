const { User, Meetup, Entry } = require('../../db/models');

class MeetupsService {
  static getAll() {
    return Meetup.findAll();
  }

  static getDetails(id) {
    return Meetup.findByPk(id, { include: { model: User } });
  }

  static async create(data, userId) {
    const meetup = await Meetup.create(data);
    await Entry.create({ meetupId: meetup.id, userId });
    return meetup;
  }

  static async edit(data, id) {
    // const track = Track.findByPk(id);
    // await track.update(data)
    return Meetup.update(data, { where: { id }, returning: true });
  }
}

module.exports = MeetupsService;