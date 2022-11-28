

exports.dashboard =((req, res) => {
    console.log(req.oidc.user);
    res.send(req.oidc.user);
});