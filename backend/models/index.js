const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product');

const db = {
  User,
  Product,
  sequelize
};

module.exports = db;
