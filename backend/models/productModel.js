const sql = require('mssql');

const createProduct = async (prod_name, price) => {
  const query = 'INSERT INTO mst_product (prod_id, prod_name, price, created_date) VALUES ((next value for sq_prod_id), @prod_name, @price, getdate())';
  const request = new sql.Request();
  request.input('prod_name', sql.VarChar, prod_name);
  request.input('price', sql.Numeric, price);
  return await request.query(query);
};

module.exports = { createProduct };
