const express = require('express');
const cors = require('cors')
require('dotenv').config()
const router = require('./routes/index')


const PORT = 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))