const Router = require('express');
const router = new Router();
const airportController = require('../controllers/airportController');
router.post('/',checkRole('ADMIN'),airportController.create);
router.get('/',airportController.getAll);
router.get('/:id',airportController.getOne);// для получения конкретного аэропорта
module.exports = router;