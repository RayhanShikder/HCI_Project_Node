'use strict';


var mongoose = require('mongoose'),
  Video = mongoose.model('Video');

exports.list_all_videos = function(req, res) {
  Video.find({}, function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};

exports.create_a_video = function(req, res) {
  var new_video = new Video(req.body);
  new_video.save(function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};


exports.read_a_video = function(req, res) {
  console.log("finding a video");
  console.log(req.params);
  Video.findById(req.params.videoId, function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};

exports.update_a_video = function(req, res) {
  Video.findOneAndUpdate({_id: req.params.videoId}, req.body, {new: true}, function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};

exports.delete_a_video = function(req, res) {


  Video.remove({
    _id: req.params.videoId
  }, function(err, video) {
    if (err)
      res.send(err);
    res.json({ message: 'Video successfully deleted' });
  });
};


