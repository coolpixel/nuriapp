'use strict';

var _ = require('lodash');
var Barang = require('./barang.model');

// Get list of barangs
exports.index = function(req, res) {
  Barang.find(function (err, barangs) {
    if(err) { return handleError(res, err); }
    return res.json(200, barangs);
  });
};

// Get a single barang
exports.show = function(req, res) {
  Barang.findById(req.params.id, function (err, barang) {
    if(err) { return handleError(res, err); }
    if(!barang) { return res.send(404); }
    return res.json(barang);
  });
};

// Creates a new barang in the DB.
exports.create = function(req, res) {
  Barang.create(req.body, function(err, barang) {
    if(err) { return handleError(res, err); }
    return res.json(201, barang);
  });
};

// Updates an existing barang in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Barang.findById(req.params.id, function (err, barang) {
    if (err) { return handleError(res, err); }
    if(!barang) { return res.send(404); }
    var updated = _.merge(barang, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, barang);
    });
  });
};

// Deletes a barang from the DB.
exports.destroy = function(req, res) {
  Barang.findById(req.params.id, function (err, barang) {
    if(err) { return handleError(res, err); }
    if(!barang) { return res.send(404); }
    barang.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}