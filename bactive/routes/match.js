var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the match page. Main algorithm for users match with other users of similar interests here');
});

module.exports = router;
