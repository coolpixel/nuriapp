'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BarangSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Barang', BarangSchema);