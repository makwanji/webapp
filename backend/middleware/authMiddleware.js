const jwt = require('jsonwebtoken');
const axios = require('axios');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'your_refresh_secret_key';


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


module.exports = authenticate;
