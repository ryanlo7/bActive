var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the search page. Users search for other users of similar interests here');
});

module.exports = router;
