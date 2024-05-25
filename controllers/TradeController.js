const fs = require('fs');
const csv = require('csv-parser'); 
const path = require('path');
const InsertTrade = require("../services/TradeServices");

const UploadCSV = async (req, res) => {

    const file = req.file

    const filePath = path.join(file.destination, file.filename);
    let csvData = []

    fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
        csvData.push(data);
    })
    .on('end', async () => {
        // push to DB
        await InsertTrade(csvData);
        res.status(200).json({ message: "inserted successfully" })
    })
    .on('error', (error) => {
        res.status(400).json(error)
    });

}

module.exports = { UploadCSV }