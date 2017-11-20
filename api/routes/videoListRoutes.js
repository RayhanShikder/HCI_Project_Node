'use strict';
module.exports = function(app) {
  var videoList = require('../controllers/videoListController');
  var crowdEntryList = require('../controllers/crowdEntryListController');
  var verifyList = require('../controllers/verifyEntryListController');

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


  app.route('/getcrowdEntriesOfAVideo/:videoId')
    .get(crowdEntryList.list_all_crowd_entries_of_a_video);
    

  app.route('/verifications')
    .get(verifyList.list_all_verifications)
    .post(verifyList.create_a_verify_entry);

  app.route('/verifications/:verificationId')
    .put(verifyList.update_a_verify_entry);
    
  app.route('/verifications/:videoId/:crowdEntryId/:contributor')
    .get(verifyList.read_a_verify_entry_by_video_id_and_crowd_entry_id_and_contributor); 
    
};
