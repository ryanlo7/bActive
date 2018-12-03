var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/**
	* Function to handle GET requests for login page.
	* Render the registration page, and return it through res.
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @return {Object} A JSON object that holds req and res.
*/
var loginGet = function(req, res) {
	res.render('login', {err: null});
}

router.get('/', loginGet);

/**
	* Function to handle POST requests for login page.
	* Causes the server to return 400 error if malformed request.
	* Queries MongoDB for this user. If it doesn't exist, or the password doesn't match
	* with cryptographic hash, then causes the server to return a 401 error, and redirects to login.
	* If all goes well, then redirects user to her profile page
	* with a JSON web token that lasts two hours.
	* @param {Object} req The express routing HTTP client request object,
	* whose body contains the user's email and password.
	* @param {Object} res The express routing HTTP client response object.
	* @return {Object} A JSON object that holds req and res.
*/
var loginPost = function(req, res) {
	var usr, pw;
	if (req.body.email === undefined || req.body.password === undefined) {
		res.status(400).send('Bad request');
		return;
	}
	usr = req.body.email;
	pw = req.body.password;
	var query = {email: usr};
	req.app.locals.db.collection('Users').findOne(query, function(err, result) {
		if(result === null) {
			res.status(401).render('login', {err: 'Invalid email/password combination'});
			return;
		}
		bcrypt.compare(pw, result.password, function(err, rs) {
			if(rs == true) {
				var payload = {"exp": Math.floor(Date.now() / 1000) + (2 * 60 * 60), "usr": usr, "userId": result.userId};
				var header = {"alg": "HS256", "typ": "JWT"};
				var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
				jwt.sign(payload, cert, { algorithm: 'HS256',  header: header}, function(err, token) {
					res.cookie("jwt", token, {});
					res.redirect(`/active/profile/${result.userId}`);
				});
			}
			else {
				res.status(401).render('login', {err: 'Invalid email/password combination'});
			}
		});
	});
}

router.post('/', loginPost);

module.exports = router;
