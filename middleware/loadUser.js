module.exports = function(req, res, next) {
  req.user = res.locals.user = null;

  if (!req.session.user) return next();

  req.models.User.findById(req.session.user, function(err, user) {
    if (err) return next(err);

    req.user = res.locals.user = user;
    next();
  });
};