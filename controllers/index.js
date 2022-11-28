<<<<<<< HEAD
exports.home = ((req, res) => {
    res.send(req.oidc.isAuthenticated() ?  res.redirect('/profile/dashboard'): res.redirect('/'));
});
=======

// This is the homepage
exports.home = (async(req, res) => {
    res.send("Welcome to the homepage.");
});
>>>>>>> f293d89fdde238e8b38cc7e27aa576062edf58bc
