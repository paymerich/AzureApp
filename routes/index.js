var express = require('express');
var router = express.Router();
var title = process.env.TITLE;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title  });
});

module.exports = router;

// This is a test
