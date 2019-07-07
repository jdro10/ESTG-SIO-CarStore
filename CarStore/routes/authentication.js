var express = require('express');
var router = express.Router();

module.exports = function (passport) {
    router.post('/login', passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    }));

    router.get('/logout', function (req, res) {

        req.session.destroy(function (err) {
            res.redirect('../');
        });
    });

    return router;
}