'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LpoSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Lpo', LpoSchema);