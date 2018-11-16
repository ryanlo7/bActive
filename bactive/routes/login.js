var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.get('/', function(req, res) {
	res.render('login', {err: null});
});

router.post('/', function(req, res) {
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
				var payload = {"exp": Math.floor(Date.now() / 1000) + (2 * 60 * 60), "usr": usr};
				var header = {"alg": "HS256", "typ": "JWT"};
				var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
				jwt.sign(payload, cert, { algorithm: 'HS256',  header: header}, function(err, token) {
					res.cookie("jwt", token, {});
					res.redirect('profile/' + result.userId);
				});
			}
			else {
				res.status(401).render('login', {err: 'Invalid email/password combination'});
			}
		});
	});
});

module.exports = router;
