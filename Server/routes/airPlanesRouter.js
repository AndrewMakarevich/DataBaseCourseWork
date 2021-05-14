const Router = require('express');
const router = new Router();
const airplaneController = require('../controllers/airPlaneController');

router.post('/',airplaneController.create);
router.get('/',airplaneController.getAll);
router.get('/:id');// для получения конкретного самолета

module.exports = router;