var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// test api
router.get('/test/api', function(req, res, next) {
  res.json({
    data: {},
    code: 200
  })
});

module.exports = router;
