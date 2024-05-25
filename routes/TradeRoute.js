const express = require('express');
const router = express.Router(); 

router.post('/upload', (req, res) => {
    res.status(200).json({ message: "Uploaded Successfully" })
})

module.exports = router;