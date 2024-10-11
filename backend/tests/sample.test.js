const request = require('supertest');
const app = require('../app'); // Replace with the path to your Express app

describe('Sample Tests for Endpoints', () => {
  // Unit Test for the login endpoint
  it('POST /login should return a success message', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: 'testuser',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  // Integration Test for the getproducts endpoint
  it('GET /getproducts should return a list of products', async () => {
    const res = await request(app).get('/getproducts');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
