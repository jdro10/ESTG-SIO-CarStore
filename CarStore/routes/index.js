var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/dashboard', function(req, res, next){
  res.render('dashboard1', {numero: 5});
});

router.get('/signUp', function(req, res, next){
  res.render('signUp');
});

module.exports = router;
