'use strict';


var mongoose = require('mongoose'),
  Crowd = mongoose.model('Crowd');

exports.list_all_crowd_entries = function(req, res) {
  Crowd.find({}, function(err, crowd) {
    if (err)
      res.send(err);
    res.json(crowd);
  });
};

exports.create_a_crowd_entry = function(req, res) {
  var new_crowd = new Crowd(req.body);
  new_crowd.save(function(err, crowd) {
    if (err)
      res.send(err);
    res.json(crowd);
  });
};


