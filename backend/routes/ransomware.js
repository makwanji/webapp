const express = require('express');
const { load, getRansomware } = require('../controllers/ransomware');
const router = express.Router();
router.get('/load', load);
router.get('/getransomware', getRansomware);
module.exports = router;
