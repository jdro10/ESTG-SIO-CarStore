var mongoose = require('mongoose');
var User = require('../models/User');

var userController = {};

userController.save = function(req, res){
    var user = new User(req.body);
    user.save(function (err){
        if(err) console.log(err);
        else{
            console.log('New user created successfully');
            res.redirect('../');
        }
    });
};

module.exports = userController;