require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: 'app1db.ckfu67ytk3xo.ap-southeast-1.rds.amazonaws.com',
    // port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      rejectUnauthorized: false,
    }

    // logging: true,
  }
);

module.exports = sequelize;


// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(dbname, username, password, {
//   host: 'pgssltest.xxxxxxxxxxxx.region.rds.amazonaws.com',
//   dialect: 'postgres'
// });
