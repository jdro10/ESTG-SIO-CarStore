var express = require('express');
var router = express.Router();
var user = require('../controllers/userController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signUp', function(req, res, next){
  user.save(req, res);
});

module.exports = router;
