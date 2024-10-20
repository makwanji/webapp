const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'your_refresh_secret_key';

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, REFRESH_SECRET, { expiresIn: '7d' });
};

const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword, email });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Save decoded token to request object
    next();
  } catch (err) {
    // Token has expired
    if (err.name === 'TokenExpiredError') {
      const refreshToken = req.headers['x-refresh-token'];
      if (!refreshToken) {
        return res.status(401).json({ message: 'Unauthorized: No refresh token provided' });
      }

      // Try to refresh the token using the refresh endpoint
      try {
        const response = await axios.post('/auth/refresh', { refreshToken });
        req.headers.authorization = `Bearer ${response.data.accessToken}`;
        next();
      } catch (refreshError) {
        return res.status(403).json({ message: 'Unauthorized: Invalid refresh token' });
      }
    } else {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  }
};



const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Refresh token endpoint
const refresh = (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(403).json({ message: 'Refresh token required' });
  }

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
    const newAccessToken = generateAccessToken(decoded);
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(403).json({ message: 'Invalid refresh token' });
  }
};

module.exports = {
  register,
  login,
  refresh,
  authenticate
};
