const Router = require('express');
const router = new Router();
const testController = require('../controllers/testController');

router.get('/', testController.test); // Этот маршрут будет доступен по /api/test

module.exports = router;
