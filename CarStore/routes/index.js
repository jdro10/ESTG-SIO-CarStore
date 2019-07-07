var express = require('express');
var router = express.Router();
var saft = require('../controllers/saftController');

var authenticated = function(req, res, next){
  if(req.isAuthenticated() && req.user.username === 'admin'){
    next();
  }else{
    res.redirect('/');
  }
}

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/signUp', authenticated, function(req, res, next){
  res.render('signUp');
});

router.get('/json', authenticated, function(req, res){
  saft.xmljson(req, res);
});

router.get('/dashboard', authenticated, function(req, res){
  saft.info(req, res);
});

router.get('/clientDetail/:id', authenticated, function(req, res){
  saft.clientDetail(req, res);
});

router.get('/sales', authenticated, function(req, res){
  saft.salesDetails(req, res);
});

router.get('/purchases', authenticated, function(req, res){
  saft.purchaseDetails(req, res);
})

router.get('/invoicesDatabase', authenticated, function(req, res){
  saft.invoicesDatabase(req, res);
});

router.get('/invoiceDetail/:index', authenticated, function(req, res){
  saft.invoicesDetails(req, res);
});

router.get('/supplierDetail/:id', authenticated, function(req, res){
  saft.supplierDetail(req, res);
});

router.get('/productDetail/:index', authenticated, function(req, res){
  saft.producDetails(req, res);
});

module.exports = router;
