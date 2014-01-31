var async = require('async');

var mongoose = require('lib/mongoose'),
  Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updated: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

exports.Project = mongoose.model('Project', schema);


