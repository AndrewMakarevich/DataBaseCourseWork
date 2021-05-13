const Router = require('express');
const router = new Router();
const airplaneController = require('../controllers/airPlaneController');

router.post('/');
router.get('/');
router.get('/:id');// для получения конкретного самолета

module.exports = router;