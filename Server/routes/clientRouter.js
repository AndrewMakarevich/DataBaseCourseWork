const Router = require('express');
const router = new Router();
const clientController = require('../controllers/clientController');

router.post('/registration', clientController.registration);//post для редактирования, get - просмотра
router.post('/login', clientController.login);
router.get('/auth', clientController.check);

module.exports = router;