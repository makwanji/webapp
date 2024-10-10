require('dotenv').config();
const express = require('express');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', productRoutes);

db.sequelize.sync().then(() => {
  console.log('Database synchronized');
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
