var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:userid', function(req, res, next) {
	var db = req.app.locals.db; //get instance of db
	var userId = parseInt(req.params.userid);

	db.collection('Users')
			.find({'userId': userId})
			.toArray(function(err, results) {
				if (results.length == 0) {
					res.status(404).send("404: userId not found");
				} else {
					user = results[0]; // should only be one match

					res.render('events', {
					 	userId: userId,
						email: user.email,
						activities: user.activities,
						availability: user.availability,
						events: user.events
					});
				}
			});

});

module.exports = router;