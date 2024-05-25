const express = require('express');
const { UploadCSV } = require('../controllers/TradeController');
const router = express.Router(); 

router.post('/upload', UploadCSV)

module.exports = router;