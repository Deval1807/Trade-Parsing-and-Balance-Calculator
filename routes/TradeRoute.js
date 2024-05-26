const express = require('express');
const { UploadCSV } = require('../controllers/TradeController');
const router = express.Router(); 

const csvFile = require('../utils/MulerUtils');

router.post('/upload', csvFile, UploadCSV)

module.exports = router;