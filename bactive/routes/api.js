var express = require('express');
var router = express.Router();
var verify = require('./verify');

router.get('/:userid',
	function(req, res, next) {
	var db = req.app.locals.db;
	var userId = parseInt(req.params.userid);
	db.collection('Users')
		.find({'userId': userId})
		.toArray(function(err, results) {
			if (results.length == 0) {
				res.status(404).send("404: userId not found");
			} else {
				user = results[0]; // should only be one match

				if (!verify.checkLogin(req.cookies.jwt, user.email)) {
					res.status(401).redirect('/login');
					return;
				}

				res.status(200).json(user);
			}
		});
});

module.exports = router;