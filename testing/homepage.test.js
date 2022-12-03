const mock = require('jest-mock-req-res');

const req = mock.mockRequest();
const reqFalseAuth = mock.mockRequest({
    'oidc' :
    {'isAuthenticated': () => {return false;}}
});
const reqTrueAuth = mock.mockRequest({
    'oidc' :
    {'isAuthenticated': () => {return true;}}
});
const res0 = mock.mockResponse();
const res1 = mock.mockResponse();
const res2 = mock.mockResponse();



const { home, main } = require('../controllers/index');

test('Accesses the homepage', async () => {
    await home(req, res0);
    expect(res0.send).toHaveBeenCalledWith('Welcome to the Homepage.');
});

test('Redirects a user that is not signed in', async () => {
    await main(reqFalseAuth, res1);
    expect(res1.redirect).toHaveBeenCalledWith('/home');
});

test('Takes signed-in user to profile', async () => {
    await main(reqTrueAuth, res2);
    expect(res2.redirect).toHaveBeenCalledWith('/user/signin');
});