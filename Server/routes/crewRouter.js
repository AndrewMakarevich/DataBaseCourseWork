const Router = require('express');
const router = new Router();
const crewController = require('../controllers/crewController');
router.post('/');
router.get('/');
router.get('/:id');// для получения конкретной команды
module.exports = router;