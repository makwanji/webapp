const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { listProducts, addProduct } = require('../controllers/productController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/add-product', authenticateToken, addProduct);
router.get('/products', authenticateToken, listProducts);


module.exports = router;
