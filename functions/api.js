const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
app.use(cors());
app.use(express.json());

// Импортируйте маршруты
const router = require('../routes/index'); // Убедитесь, что путь к маршрутам правильный
app.use('/.netlify/functions/api/api', router);

// Экспортируйте обработчик для Netlify
exports.handler = serverless(app);
