'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CrowdSchema = new Schema({
  vedioId: {
    type: Number
  },
  selectType: {
    type: String
  },
  selectName: {
    type: String
  },
  commentType: {
    type: String
  },
  commentDescription: {
    type: String
  },
  time: {
    type: Number
  }
});

module.exports = mongoose.model('Crowd', CrowdSchema);