'use strict';

var _ = require('lodash');
var Keymap = require('./keymap.model');

// Get list of keymaps
exports.index = function(req, res) {
  Keymap.find(function (err, keymaps) {
    if(err) { return handleError(res, err); }
    return res.json(200, keymaps);
  });
};

// Get a single keymap
exports.show = function(req, res) {
  Keymap.findById(req.params.id, function (err, keymap) {
    if(err) { return handleError(res, err); }
    if(!keymap) { return res.send(404); }
    return res.json(keymap);
  });
};

// Creates a new keymap in the DB.
exports.create = function(req, res) {
  Keymap.create(req.body, function(err, keymap) {
    if(err) { return handleError(res, err); }
    return res.json(201, keymap);
  });
};

// Updates an existing keymap in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Keymap.findById(req.params.id, function (err, keymap) {
    if (err) { return handleError(res, err); }
    if(!keymap) { return res.send(404); }
    var updated = _.merge(keymap, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, keymap);
    });
  });
};

// Deletes a keymap from the DB.
exports.destroy = function(req, res) {
  Keymap.findById(req.params.id, function (err, keymap) {
    if(err) { return handleError(res, err); }
    if(!keymap) { return res.send(404); }
    keymap.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}