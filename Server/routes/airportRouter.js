const Router = require('express');
const router = new Router();
const airportController = require('../controllers/airportController');
router.post('/');
router.get('/');
router.get('/:id');// для получения конкретного аэропорта
module.exports = router;