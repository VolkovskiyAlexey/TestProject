var async = require('async');

var mongoose = require('lib/mongoose'),
  Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  complete: {
    type: Number,
    required: true
  },
  projectId: {
    type: Number,
    required: true
  },
  number: {
    type: Number,
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
  }
});

exports.Milestone = mongoose.model('Milestone', schema);


