// Import necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// Initialize the app
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// MongoDB schema for User
const userSchema = new mongoose.Schema({
  username: String,
  password: String, // hashed password
});

const User = mongoose.model('User', userSchema);

// MongoDB schema for Product
const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

// Middleware to check if user is admin
const checkAdmin = (req, res, next) => {
  if (req.body.username !== 'admin') {
    return res.status(403).json({ message: 'Only admin can add products' });
  }
  next();
};

// 1. Login API
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

// 2. GetProducts API
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// 3. AddProduct API (admin-only)
app.post('/products', checkAdmin, async (req, res) => {
  const { id, name, price } = req.body;
  const product = new Product({ id, name, price });
  await product.save();
  res.status(201).json({ message: 'Product added successfully' });
});

// 4. GetProduct API
app.get('/products/:id', async (req, res) => {
  const product = await Product.findOne({ id: req.params.id });
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
