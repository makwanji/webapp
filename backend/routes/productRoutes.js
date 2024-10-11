const express = require('express');
const { addProduct, listProducts, getProduct } = require('../controllers/productController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, addProduct);
router.get('/products', authenticate, listProducts);
router.get('/product/:id', authenticate, getProduct);

module.exports = router;
