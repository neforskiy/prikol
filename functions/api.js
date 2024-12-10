const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
app.use(cors());
app.use(express.json());

// Импортируйте маршруты
const router = require('../routes/index'); // Убедитесь, что путь к маршрутам правильный
app.use('/api', router);

// Экспортируйте обработчик для Netlify
exports.handler = serverless(app);
