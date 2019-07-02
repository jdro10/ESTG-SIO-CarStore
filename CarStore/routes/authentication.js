var express = require('express');
var router = express.Router();

module.exports = function(passport){
    router.post('/login', passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    }));

    return router;
}