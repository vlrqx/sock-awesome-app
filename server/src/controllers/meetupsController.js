const MeetupsService = require('../servises/meetupsService');

class MeetupsController {
  static async getAllMeetups(req, res) {
    const meetups = await MeetupsService.getAll();
    res.json(meetups);
  }

  static async getMeetupDetails(req, res) {
    const meetup = await MeetupsService.getDetails(req.params.id);
    res.json(meetup);
  }

  //   static async createMeetup(req, res) {
  //     // try {
  //     //   const { user } = res.locals;
  //     //   console.log(user);

  //     //   const newTrack = await MeetupsService.create(req.body, user.id);
  //     //   res.json(newTrack);
  //     // } catch (err) {
  //     //   res.status(500).json({ message: err.message });
  //     // }
  //   }

  //   static async updateTrack(req, res) {
  //     try {
  //       const { id } = req.params;
  //       const { user } = res.locals;

  //       const track = await MeetupsService.getDetails(id);
  //       if (!track.Artists.some((artist) => artist.id === user.id)) {
  //         return res
  //           .status(403)
  //           .json({ message: 'you are not allowed to edit this track' });
  //       }
  //       const updatedTrack = await MeetupsService.edit(req.body, id);
  //       return res.json(updatedTrack);
  //     } catch (err) {
  //       return res.status(500).json({ message: err.message });
  //     }
  //   }
}

module.exports = MeetupsController;
