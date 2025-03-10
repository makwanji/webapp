require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || 'webappdb',
  process.env.POSTGRES_USER || 'webapp',
  process.env.POSTGRES_PASSWORD || 'web#app21',
  {
    // host: process.env.POSTGRES_HOST,
    host: process.env.POSTGRES_HOST || '18.136.147.42',
    port: process.env.POSTGRES_PORT || 5432,

    dialect: 'postgres',


  }
);



module.exports = sequelize;

