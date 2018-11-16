var express = require('express');
var router = express.Router();

/* GET user information. */
router.get('/:userid',
	/**
		* Function to handle GET requests for user information.
		* Render the edit page corresponding to the user, or a 404 if the userID does not exist.
		* @param {Object} req The express routing HTTP client request object,
		* whose parameters contain the userID.
		* @param {Object} res The express routing HTTP client response object.
		* @param {callback} next The express routing callback function to invoke next middleware in the stack.
		* @return {Object} A JSON object that holds req, res, and next.
	*/
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

					res.render('edit', {
					 	userId: userId,
						email: user.email,
						activities: user.activities,
						availability: user.availability
					});
				}
			});
});

router.post('/:userid', function(req, res, next) {
	/**
		* Function to handle POST requests for user information.
		* Updates the user's information in the database.
		* @param {Object} req The express routing HTTP client request object,
		* whose parameters contain the userID, email, password, and confirmation.
		* @param {Object} res The express routing HTTP client response object.
		* @param {callback} next The express routing callback function to invoke next middleware in the stack.
		* @return {Object} A JSON object that holds req, res, and next.
	*/

	var db = req.app.locals.db;
	var userId = parseInt(req.params.userid);
	var email = req.params.email;
	var password = req.params.password;
	var passwordconfirm = req.params.passwordconfirm;

	var updateObj = {$set: {'email': email}};

	// if password or email are reset, must make a new cookie!
	
	// TODO put this in the database.js file
	// db.collection('Users').updateOne({'userId': userId}, updateObj, {});
	res.redirect('/profile/' + userId);
});

module.exports = router;
