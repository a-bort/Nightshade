var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/routes');

var app = express();

//env setup
dotenv = require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//redirect to https
app.use(function(req, res, next){
  if (process.env.ENV === 'prod'){
    if (req.headers['x-forwarded-proto'] !== 'https'){
      return res.redirect('https://' + req.headers.host + req.url);
    } else {
      return next();
    }
  } else {
    return next();
  }
});

//transpose .html requests to real paths
app.use(function(req, res, next){
  var url = req.url || "";
  if(url && url.endsWith(".html")){
    req.url = url.substring(0, url.length - 5);
  }
  next();
});

//load routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.ENV === 'dev' ? err : {status : err.status || 500};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: "Something went wrong", pagename: "error" });
});

module.exports = app;

console.log("Nightshade Website running in the " + process.env.ENV + " environment");
