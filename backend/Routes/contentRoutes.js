const express = require('express');
const { sendTip } = require('../controllers/tipController');
const router = express.Router();

router.post('/tip', sendTip);

module.exports = router;