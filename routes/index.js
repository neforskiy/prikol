const Router = require('express');
const router = new Router();
const testRouter = require('./testRouter');

router.use('/test', testRouter); // Этот маршрут будет доступен по /api/test

module.exports = router;
