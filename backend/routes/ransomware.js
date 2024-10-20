const express = require('express');
const { loadRansomware, getRansomware } = require('../controllers/ransomware');
const router = express.Router();
router.get('/loadRansomware', loadRansomware);
router.get('/getransomware', getRansomware);
module.exports = router;
