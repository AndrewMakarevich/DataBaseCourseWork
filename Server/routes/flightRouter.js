const Router = require('express');
const router = new Router();
const flightController = require('../controllers/flightController');
router.post('/',flightController.create);
router.get('/',flightController.getAll);
router.get('/:id',flightController.getOne);// для получения конкретного рейса

module.exports = router;