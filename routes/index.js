const express = require('express');
const router = express.Router(); 

router.use('/trade', require('./TradeRoute'))

router.use('/user', require('./UserRoute'))

module.exports = router;