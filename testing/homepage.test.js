const mock = require('jest-mock-req-res');
const { home, main } = require('../controllers/index');

// test original homepage route
describe("accessing routes/", () => {
    describe("viewing the main route of the API", () => {
        const req0 = mock.mockRequest();
        const res0 = mock.mockResponse();
        
        test('Accesses the homepage', async () => {
            await home(req0, res0);
            expect(res0.send).toHaveBeenCalledWith('Welcome to the Homepage.');
        });
    });
    
    // if user is not signed in, it should take them to the homepage
    describe("testing user that is not signed in", () => {
        const reqFalseAuth = mock.mockRequest({
            'oidc' :
            {'isAuthenticated': () => {return false;}}
        });
        const res1 = mock.mockResponse();
        
        test('Redirects a user that is not signed in', async () => {
            await main(reqFalseAuth, res1);
            expect(res1.redirect).toHaveBeenCalledWith('/home');
        });
    });
    
    describe("testing user that is signed in", () => {
        // if user is signed in, it should take them to their profile
        const reqTrueAuth = mock.mockRequest({
            'oidc' :
            {'isAuthenticated': () => {return true;}}
        });
        const res2 = mock.mockResponse();
        
        test('Takes signed-in user to profile', async () => {
            await main(reqTrueAuth, res2);
            expect(res2.redirect).toHaveBeenCalledWith('/user/signin');
        });
    });
});