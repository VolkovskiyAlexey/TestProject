var User = require('models/user').User;
var HttpError = require('error').HttpError;
var AuthError = require('models/user').AuthError;
var async = require('async');

exports.list = function(req, res, next) {
  User.find({}, function(err, models) {
    if (err) throw err;
    console.log(models);
    res.render('user/list', {models: models});
  });
};

exports.read = function(req, res, next) {

};

exports.create = function(req, res, next) {

};

exports.update = function(req, res, next) {
  User.findById(req.param.id, function(err, model) {
    if (err) throw err;
    console.log(model);
    res.render('user/update', {model: model});
  });
};

exports.del = function(req, res, next) {

};
