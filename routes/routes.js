var express = require('express');
var router = express.Router();
var galleryJson = require('../public/data/gallery.json');
var projectsJson = require('../public/data/projects.json');

router.get('/', function(req, res, next) {
  res.render('index', { title: "", pagename: "index" });
});

router.get('/index', function(req, res, next) {
  res.redirect('/');
  //res.render('index', { title: "", pagename: "index" });
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

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: "Gallery of our Projects", pagename: "gallery", gallery: galleryJson});
});

// router.get('/services', function(req, res, next) {
//   res.render('gardens-old', { title: "Gardens", pagename: "gardens" });
// });

// router.get('/book', function(req, res, next) {
//   res.render('book', { title: "Book Us", pagename: "book" });
// });

router.get('/gardens', function(req, res, next) {
  res.render('gardens', { title: "Gardens & Edible Landscapes", pagename: "gardens", gallery: projectsJson });
});

// router.get('/events', function(req, res, next) {
//   res.render('events', { title: "Sustainable Feasts", pagename: "events" });
// });

router.get('/products', function(req, res, next) {
  res.render('products', { title: "Unique Products", pagename: "products" });
});

router.get('/order', function(req, res, next) {
  res.render('order', { title: "Order", pagename: "order" });
});

router.get('/values', function(req, res, next) {
  res.render('values', { title: "Values", pagename: "values" });
});

router.get('/sweepstakes', function(req, res, next) {
  res.render('sweepstakes', { title: "Spring Sweepstakes", pagename: "sweepstakes" });
});

module.exports = router;
