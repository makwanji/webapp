const express = require('express');
const { loadRansomware, getRansomware } = require('../controllers/ransomwareController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/loadRansomware', authenticate, loadRansomware);
router.get('/getransomware', authenticate, getRansomware);
module.exports = router;
