var express = require('express');
var router = express.Router();

var User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var user = new User({
  //   name: 'vito24',
  //   age: 27
  // });
  // user.save(function(err, user) {
  //   if (err) {
  //     console.log('===========err==========', err);
  //   }
  //   res.send('新增用户成功');
  // });
  res.send('respond with a resource');
});

module.exports = router;
