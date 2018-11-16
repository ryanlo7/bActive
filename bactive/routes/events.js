var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:userid',
	/**
		* Function to handle GET requests for user events page.
		* If the userID is found, it renders the events page for the user with that ID.
		* @param {Object} req The express routing HTTP client request object,
		* which contains the userID as a parameter.
		* @param {Object} res The express routing HTTP client response object.
		* @param {callback} next The express routing callback function to invoke next middleware in the stack.
		* @return {Object} A JSON object that holds req, res, and next.
	*/
	function(req, res, next) {
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
						events: user.events
					});
				}
			});

});

module.exports = router;
