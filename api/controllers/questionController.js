'use strict';


var mongoose = require('mongoose'),
  Question = mongoose.model('Question');

exports.list_all_questions = function(req, res) {
  Question.find({}, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

exports.create_a_question = function(req, res) {
  var new_question = new Question(req.body);
  new_question.save(function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

