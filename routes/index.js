var express = require('express');
var router = express.Router();
var pnumber = '510-480-7712';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { number: pnumber});
});

router.get('/about', function(req, res, next) {
  res.render('about', { number: pnumber});
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { number: pnumber});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { number: pnumber});
});

module.exports = router;
