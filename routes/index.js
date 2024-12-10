const Router = require('express');
const router = new Router();
const testRouter = require('./testRouter');

// Обработчик для корневого маршрута API
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

router.use('/test', testRouter); // Этот маршрут будет доступен по /api/test

router.use('/test/code', testRouter);

module.exports = router;
