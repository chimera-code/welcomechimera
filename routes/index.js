var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcomechimera');
});

router.get('/text-animation', function(req, res, next) {
  res.render('text-animation');
});

module.exports = router;
