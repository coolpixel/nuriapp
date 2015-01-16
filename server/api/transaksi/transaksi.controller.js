'use strict';

var _ = require('lodash');
var Transaksi = require('./transaksi.model');

// Get list of transaksis
exports.index = function(req, res) {
  Transaksi.find(function (err, transaksis) {
    if(err) { return handleError(res, err); }
    return res.json(200, transaksis);
  });
};

// Get a single transaksi
exports.show = function(req, res) {
  Transaksi.findById(req.params.id, function (err, transaksi) {
    if(err) { return handleError(res, err); }
    if(!transaksi) { return res.send(404); }
    return res.json(transaksi);
  });
};

// Creates a new transaksi in the DB.
exports.create = function(req, res) {
  Transaksi.create(req.body, function(err, transaksi) {
    if(err) { return handleError(res, err); }
    return res.json(201, transaksi);
  });
};

// Updates an existing transaksi in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Transaksi.findById(req.params.id, function (err, transaksi) {
    if (err) { return handleError(res, err); }
    if(!transaksi) { return res.send(404); }
    var updated = _.merge(transaksi, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, transaksi);
    });
  });
};

// Deletes a transaksi from the DB.
exports.destroy = function(req, res) {
  Transaksi.findById(req.params.id, function (err, transaksi) {
    if(err) { return handleError(res, err); }
    if(!transaksi) { return res.send(404); }
    transaksi.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}