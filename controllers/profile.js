
exports.dashboard =((req, res) => {
    user =req.oidc.user;
    console.log(user);
    res.send(req.oidc.isAuthenticated() ?  res.send(user): res.redirect('/home')); 
});