const moment = require('moment');
const Trade = require("../models/Trade");

const CheckBalance = async (req, res) => {
    
    const { timestamp } = req.body;
    const formattedTimeStamp = moment(timestamp, "YYYY-MM-DD HH:mm:ss").toDate();

    try {
        const trades = await Trade.find({
            utc_time: { $lt: formattedTimeStamp }
        });

        const balance = {}

        trades.map(trade => {
            // destructure basecoin, operation and amount
            const { base_coin, operation, amount } = trade;
            // console.log(base_coin, operation, amount);

            // add the coin in balance if not present already
            if (!balance[base_coin]) {
                balance[base_coin] = 0;
            }

            // add the amount if it is a buy and subtract if it is a sell
            if (operation === "Buy") {
                balance[base_coin] += amount;
            } else if (operation === "Sell") {
                balance[base_coin] -= amount;
            }
        });

        res.status(200).json(balance)
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = { CheckBalance }