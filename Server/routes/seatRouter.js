const Router = require('express');
const router = new Router();
const seatController = require('../controllers/seatController');
router.post('/');
router.get('/');
router.get('/:id');// для получения конкретного места
module.exports = router;