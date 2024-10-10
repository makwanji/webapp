const sql = require('mssql');

const getUserByUsername = async (user_name) => {
  const query = 'SELECT * FROM mst_user WHERE user_name = @user_name';
  const request = new sql.Request();
  request.input('user_name', sql.VarChar, user_name);
  return await request.query(query);
};

const createUser = async (user_name, passwordHash, user_type) => {
  const query = 'INSERT INTO mst_user (user_id, user_name, password, user_type) VALUES ((next value for sq_user_id), @user_name, @password, @user_type)';
  const request = new sql.Request();
  request.input('user_name', sql.VarChar, user_name);
  request.input('password', sql.VarChar, passwordHash);
  request.input('user_type', sql.VarChar, user_type);
  return await request.query(query);
};

module.exports = { getUserByUsername, createUser };
