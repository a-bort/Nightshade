var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: "", pagename: "index" });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: "", pagename: "index" });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: "About", pagename: "about" });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Contact", pagename: "contact" });
});

router.get('/manifesto', function(req, res, next) {
  res.render('manifesto', { title: "Manifesto", pagename: "manifesto" });
});

router.get('/plants', function(req, res, next) {
  res.render('plants', { title: "Badass Plants", pagename: "plants" });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: "Services", pagename: "services" });
});

router.get('/values', function(req, res, next) {
  res.render('values', { title: "Values", pagename: "values" });
});

module.exports = router;
