const sql = require('mssql');
const jwt = require('jsonwebtoken');
const { createProduct } = require('../models/productModel');

// Add product
const addProduct = async (req, res) => {
  const { prod_name, price } = req.body;
  await createProduct(prod_name, price);
  res.status(201).json({ message: 'Product added successfully' });
};

// List products
const listProducts = async (req, res) => {
  const query = 'select * from mst_product';
  const result = await new sql.Request().query(query);
  res.json(result.recordset);
};

module.exports = { addProduct, listProducts };
