const mock = require('jest-mock-req-res');

const req = mock.mockRequest();
const res = mock.mockResponse();
const { home } = require('../controllers/index');

test('Accesses the homepage', async () => {
    await home(req, res);
    expect('Welcome to the homepage.');    
});