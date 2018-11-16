var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

function checkLogin(cookie, email) {
	var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
	if(cookie == null) {
		console.log('no cookie');
		return false; // return 401
	}

	try {
		var decoded = jwt.verify(cookie, cert, {algorithms: ["HS256"]});

		if(!('usr' in decoded) || decoded.usr != email) {
			return false; // return 401
		}
	} catch (error) {
		return false;
	}

	return true;
}

/* GET user information. */
router.get('/:userid', function(req, res, next) {
	var db = req.app.locals.db;
	var userId = parseInt(req.params.userid);

	db.collection('Users')
			.find({'userId': userId})
			.toArray(function(err, results) {
				if (results.length == 0) {
					res.status(404).send("404: userId not found");
				} else {
					user = results[0]; // should only be one match

					if (!checkLogin(req.cookies.jwt, user.email)) {
						res.status(401).redirect('/login');
						return;
					}

					res.render('profile', {
					 	userId: userId,
						email: user.email,
						activities: user.activities,
						availability: user.availability
					});
				}
			});
});

module.exports = router;
