var express = require('express');
var router = express.Router();

//setting home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Dev Skills' });
});

module.exports = router;
