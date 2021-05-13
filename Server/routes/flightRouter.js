const Router = require('express');
const router = new Router();
const flightController = require('../controllers/flightController');
router.post('/');
router.get('/');
router.get('/:id');// для получения конкретного рейса

module.exports = router;