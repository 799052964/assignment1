var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Boshen Yang', message:'This is my Express Portfolio Site!'});
});
router.get('/about_me', function(req, res, next) {
  res.render('about_me', { title: 'About me', message:'This is Boshen Yang!'});
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', message:'Here are the services:'});
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My project', message:'Projects List:'});
});
router.get('/contact_me', function(req, res, next) {
  res.render('contact_me', { title: 'Contact Me', message:'Please leave a message to me.'});
});
module.exports = router;
