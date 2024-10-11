const { Product } = require('../models');

const addProduct = async (req, res) => {
  const { name, price } = req.body;

  try {
    await Product.create({ name, price });
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getProduct = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addProduct,
  listProducts,
  getProduct,
};
