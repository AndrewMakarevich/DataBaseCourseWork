const Router = require('express');
const router = new Router();
const ticketController = require('../controllers/seatController');
router.post('/');
router.get('/');
router.get('/:id');// для получения конкретного билета
module.exports = router;