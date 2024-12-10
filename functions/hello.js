const express = require('express');
const cors = require('cors');
const { createHandler } = require('serverless-http'); // Убедитесь, что вы установили serverless-http

const app = express();
app.use(cors());
app.use(express.json());

// Импортируйте маршруты
const router = require('../routes/index');
app.use('/api', router);

// Экспортируйте обработчик для Netlify
exports.handler = createHandler(app);
