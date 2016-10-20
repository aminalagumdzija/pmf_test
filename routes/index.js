var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PMF' });
});
router.get('/nova', function(req, res, next) {
  res.render('nova', { title: 'TEST' });
});

module.exports = router;
