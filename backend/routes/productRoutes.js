const express = require('express');
const { addProduct, getProducts, getProduct } = require('../controllers/productController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/addproduct', authenticate, addProduct);
router.get('/products', authenticate, getProducts);
router.get('/product/:id', authenticate, getProduct);

module.exports = router;
