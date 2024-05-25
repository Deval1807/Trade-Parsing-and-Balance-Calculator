const express = require('express')
require('dotenv').config() 
  
// Swagger for api documentation    
const { swaggerDoc, swaggerui } = require('./utils/SwaggerUtils'); 
 
const ConnectDB = require('./config/Database') 
  
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 8000 

ConnectDB();

app.get("/", (req, res) => res.send("Hello World!"));
 
app.use('/api', require('./routes'))

app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDoc))

app.listen(port, () => console.log(`Listening on port ${port}!`)) 