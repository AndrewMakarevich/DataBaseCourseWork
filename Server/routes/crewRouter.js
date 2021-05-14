const Router = require('express');
const router = new Router();
const crewController = require('../controllers/crewController');
router.post('/',crewController.create);
router.get('/',crewController.getAll);
router.get('/:id',crewController.getOne);// для получения конкретной команды
module.exports = router;