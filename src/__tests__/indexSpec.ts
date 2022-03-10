import supertest from 'supertest';
import app from '../index';

// Create a request object
const request = supertest(app);

describe('Test basic endpoint', () => {
  it('get the / endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
