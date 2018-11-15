var express = require('express');
var router = express.Router();

/* GET new user registration. */
router.get('/', function(req, res, next) {
  	res.render('register', {});
});

/* POST new user registration */
router.post('/', function(req, res, next) {
	var email = req.body.email;
	var password = req.body.password;
	res.send(`This is the email and password: ${email}, ${password}`);
});

module.exports = router;
