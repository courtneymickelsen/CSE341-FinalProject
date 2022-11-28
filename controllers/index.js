exports.home = ((req, res) => {
    res.send(req.oidc.isAuthenticated() ?  res.redirect('/profile/dashboard'): res.redirect('/'));
});