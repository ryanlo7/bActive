var express = require('express');
var router = express.Router();

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

					res.render('edit', {
					 	userId: userId,
						email: user.email,
						activities: user.activities,
						availability: user.availability
					});
				}
			});
});

module.exports = router;
