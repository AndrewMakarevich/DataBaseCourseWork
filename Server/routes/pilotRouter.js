const Router = require('express');
const router = new Router();
const pilotController = require('../controllers/pilotController');
router.post('/');
router.get('/');
router.get('/:id');// для получения конкретного пилота
module.exports = router;