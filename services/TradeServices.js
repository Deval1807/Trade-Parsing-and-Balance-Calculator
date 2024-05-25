const Trade = require("../models/Trade");
const moment = require('moment');

const InsertTrade = async (csvData) => {
    try {
        for(trade of csvData) {
            const coins = trade.Market.split('/');
            const base_coin = coins[0];
            const quote_coin = coins[1];

            const utcTime = moment(trade.UTC_Time, "YYYY-MM-DD HH:mm:ss").toDate();

            const result = await Trade.create({
                user_id: trade.User_ID,
                utc_time: utcTime,
                operation: trade.Operation,
                base_coin: base_coin,
                quote_coin: quote_coin,
                amount: parseFloat(trade['Buy/Sell Amount']),
                price: parseFloat(trade.Price)
            });
        }
    } catch (error) {
        throw error
    }
}

module.exports = InsertTrade