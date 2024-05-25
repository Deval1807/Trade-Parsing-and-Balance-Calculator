const express = require('express');
const router = express.Router(); 

router.use('/trade', require('./TradeRoute'))

module.exports = router;