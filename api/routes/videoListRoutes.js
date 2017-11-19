'use strict';
module.exports = function(app) {
  var videoList = require('../controllers/videoListController');
  var crowdEntryList = require('../controllers/crowdEntryListController');

  // todoList Routes
  app.route('/videos')
    .get(videoList.list_all_videos)
    .post(videoList.create_a_video); //do later


  app.route('/videos/:videoId')
    .get(videoList.read_a_video);
   // .put(videoList.update_a_video) //do later
    //.delete(videoList.delete_a_video); //do later

  app.route('/crowdEntries')
    .get(crowdEntryList.list_all_crowd_entries)
    .post(crowdEntryList.create_a_crowd_entry); //do later


};
