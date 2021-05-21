const Router = require('express');
const router = new Router();
const pilotController = require('../controllers/pilotController');
const checkRole = require('../middleware/checkRoleMiddleWare');

router.post('/',checkRole('ADMIN'),pilotController.create);
router.get('/',pilotController.getAll);
router.get('/:id',pilotController.getOne);// для получения конкретного пилота
module.exports = router;