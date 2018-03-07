/**
 * Created by vito on 2018/3/6.
 */

var mongoose = require('../db');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;