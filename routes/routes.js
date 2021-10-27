var express = require('express');
var router = express.Router();
var plantsJson = require('../data/plants.json');

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
  res.render('plants', { title: "Badass Plants", pagename: "plants", plants: plantsJson });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: "Services", pagename: "services" });
});

router.get('/gardens', function(req, res, next) {
  res.render('gardens', { title: "Gardens & Edible Landscapes", pagename: "gardens" });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: "Sustainable Feasts", pagename: "events" });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: "Unique Products", pagename: "products" });
});

router.get('/order', function(req, res, next) {
  res.render('order', { title: "Unique Products", pagename: "products" });
});

router.get('/values', function(req, res, next) {
  res.render('values', { title: "Values", pagename: "values" });
});

module.exports = router;
