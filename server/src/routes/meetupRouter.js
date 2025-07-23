const MeetupsController = require('../controllers/meetupsController');
const meetupRouter = require('express').Router();
const verifyAccessToken = require('../middlevares/verifyAccessToken')

meetupRouter.get('/', MeetupsController.getAllMeetups);
// tracksRouter.post('/', verifyAccessToken, MeetupsController.createTrack);
meetupRouter.get('/:id', verifyAccessToken, MeetupsController.getMeetupDetails);
// tracksRouter.put('/:id', verifyAccessToken, MeetupsController.updateTrack);

module.exports = meetupRouter;
