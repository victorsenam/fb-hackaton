var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET query page */
router.get('/list', function(req, res, next) {
  res.render('listing', { title: 'Search Results for ' + req.get
});

module.exports = router;
