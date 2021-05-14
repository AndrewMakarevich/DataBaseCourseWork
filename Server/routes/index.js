const Router = require('express');
const router = new Router();
const airPlanesRouter = require('./airPlanesRouter');
const airportRouter = require('./airportRouter');
const clientRouter = require('./clientRouter');

const crewRouter = require('./crewRouter');
const flightRouter = require('./flightRouter');
const pilotRouter = require('./pilotRouter');
const registrationRouter = require('./registrationRouter');
const seatRouter = require('./seatRouter');
const ticketRouter = require('./tickerRouter');

router.use('/client',clientRouter);
router.use('/airplane',airPlanesRouter);
router.use('/airport',airportRouter);
router.use('/flight',flightRouter);
router.use('/pilot',pilotRouter);
router.use('/registration',registrationRouter);
router.use('/seat',seatRouter);
router.use('/ticket',ticketRouter);
router.use('/crew',crewRouter);

module.exports = router;