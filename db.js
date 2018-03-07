/**
 * Created by vito on 2018/3/6.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/egd');

module.exports = mongoose;