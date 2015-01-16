'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var KeymapSchema = new Schema({
	keymap:String,	
  	nama: String,
  	oldkey: String
});

module.exports = mongoose.model('Keymap', KeymapSchema);