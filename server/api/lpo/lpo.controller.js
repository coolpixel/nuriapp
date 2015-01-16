'use strict';

var _ = require('lodash');
var Lpo = require('./lpo.model');

// Get list of lpos
exports.index = function(req, res) {
  Lpo.find(function (err, lpos) {
    if(err) { return handleError(res, err); }
    return res.json(200, lpos);
  });
};

// Get a single lpo
exports.show = function(req, res) {
  Lpo.findById(req.params.id, function (err, lpo) {
    if(err) { return handleError(res, err); }
    if(!lpo) { return res.send(404); }
    return res.json(lpo);
  });
};

// Creates a new lpo in the DB.
exports.create = function(req, res) {
  Lpo.create(req.body, function(err, lpo) {
    if(err) { return handleError(res, err); }
    return res.json(201, lpo);
  });
};

// Updates an existing lpo in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Lpo.findById(req.params.id, function (err, lpo) {
    if (err) { return handleError(res, err); }
    if(!lpo) { return res.send(404); }
    var updated = _.merge(lpo, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, lpo);
    });
  });
};

// Deletes a lpo from the DB.
exports.destroy = function(req, res) {
  Lpo.findById(req.params.id, function (err, lpo) {
    if(err) { return handleError(res, err); }
    if(!lpo) { return res.send(404); }
    lpo.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}