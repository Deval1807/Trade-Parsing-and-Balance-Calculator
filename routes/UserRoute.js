const express = require('express');
const { CheckBalance } = require('../controllers/UserController');
const router = express.Router();

router.post('/check-balance', CheckBalance)

module.exports = router;