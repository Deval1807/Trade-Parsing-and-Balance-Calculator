const moment = require('moment');
const Trade = require("../models/Trade");

const UploadCSV = async (req, res) => {
    

    /*
    const { user_id, utc_time, operation, market, amount, price } = req.body;
    try {
        const coins = market.split('/')
        const base_coin = coins[0];
        const quote_coin = coins[1];

        const utcTime = moment(utc_time, "DD-MM-YYYY hh:mm:ss A").toDate();
        
        const result = await Trade.create({
            user_id: user_id,
            utc_time: utcTime,
            operation: operation,
            base_coin: base_coin,
            quote_coin: quote_coin,
            amount: amount,
            price: price
        });

        return res.status(200).json(result)

    }catch(error) {
        return res.status(400).json(error)
    }
    */

    const file = req.file
    console.log(file.filename);

    
}

module.exports = { UploadCSV }