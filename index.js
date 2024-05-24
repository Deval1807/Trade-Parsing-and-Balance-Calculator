const express = require('express')
require('dotenv').config()

const ConnectDB = require('./config/Database')

const app = express()
app.use(express.json)
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT

ConnectDB();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Listening on port ${port}!`)) 