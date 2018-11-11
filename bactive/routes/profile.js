var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the profile page. Users can view their or other users profiles here');
});

module.exports = router;
