const express = require('express');
const { UploadCSV } = require('../controllers/TradeController');
const router = express.Router(); 
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Create the directory for storing the csv files, if it does not exists already
const csvFiles = path.join(__dirname, '..', 'csvFiles');
if (!fs.existsSync(csvFiles)) {
    fs.mkdirSync(csvFiles);
}

// Configuring multer to store the csv files in the /csvFiles directory
const csvStorage = multer.diskStorage({
    destination: function(req,file, cb){ 
        cb(null, 'csvFiles')
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + '_' + file.originalname);
    }
})

const csvFile = multer({ storage: csvStorage}).single('csvFile');

router.post('/upload', csvFile, UploadCSV)

module.exports = router;