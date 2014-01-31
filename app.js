var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('lib/log')(module);
var mongoose = require('lib/mongoose');
var HttpError = require('error').HttpError;
var user = require('connect-roles');

var app = express();

//anonymous users can only access the home page
//returning false stops any more rules from being
//considered
/*user.use(function(req, action) {
  if (!req.user.isAuthenticated) return action === 'access home page';
});*/



app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.favicon());

if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());

app.use(express.cookieParser());

//var MongoStore = require('connect-mongo')(express);


app.use(express.session({
  secret: config.get('session:secret'),
  key: config.get('session:key'),
  cookie: config.get('session:cookie')
}));

app.use(express.session({
  secret: config.get('session:secret')
}));


app.use(require('middleware/sendHttpError'));
app.use(require('middleware/loadUser'));

app.use(app.router);

require('routes')(app);

app.use(express.static(path.join(__dirname, 'public')));


app.use(function(err, req, res, next) {
  if (typeof err == 'number') { // next(404);
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') == 'development') {
      express.errorHandler()(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});


http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

