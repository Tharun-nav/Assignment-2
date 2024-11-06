var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home',
  });
});

router.get('/Home', function(req, res, next) {
  res.render('index', {
    title: 'Home',
  });
});

router.get('/AboutMe', function(req, res, next) {
  res.render('index', {
    title: 'About me',
  });
});

router.get('/Projects', function(req, res, next) {
  res.render('index', {
    title: 'My Projects',
  });
});
/* Get Contact Me page */
router.get('/ContactMe', function(req, res, next) {
  res.render('index', {
    title: 'Contact me',
  });
});

module.exports = router;
