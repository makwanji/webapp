const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sql = require('mssql');
const { getUserByUsername, createUser } = require('../models/userModel');

// Register User
const registerUser = async (req, res) => {
  const { user_name, password, user_type } = req.body;
  const userExists = await getUserByUsername(user_name);
  if (userExists.recordset.length > 0) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await createUser(user_name, passwordHash, user_type);
  res.status(201).json({ message: 'User registered successfully' });
};

// Login User
const loginUser = async (req, res) => {
  const { user_name, password } = req.body;
  const user = await getUserByUsername(user_name);

  if (user.recordset.length === 0) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const validPassword = await bcrypt.compare(password, user.recordset[0].password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user.recordset[0].user_id }, process.env.JWT_SECRET, {
    expiresIn: '24h'
  });
  res.json({ token });
};

module.exports = { registerUser, loginUser };
