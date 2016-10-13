/*
 Author: Boshen Yang
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Boshen Yang', message:'This is my Express Portfolio Site!'});
});
/* GET about_me page. */
router.get('/about_me', function(req, res, next) {
  res.render('about_me', { title: 'About me', message:'This is Boshen Yang!'});
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', message:'Here are the services:'});
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My project', message:'Projects List:'});
});
/* GET contact_me page. */
router.get('/contact_me', function(req, res, next) {
  res.render('contact_me', { title: 'Contact Me', message:'Please leave a message to me.'});
});

// export the router
module.exports = router;
