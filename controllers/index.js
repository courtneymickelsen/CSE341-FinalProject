exports.home = ((req, res) => {
    res.send("Welcome to the Homepage.");
});

exports.main = ((req, res) => {
    res.send(req.oidc.isAuthenticated() ? res.redirect("/user/signin") : res.redirect('/home'));
});


