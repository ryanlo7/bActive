var express = require('express');
var router = express.Router();
var verify = require('./verify');

/* GET users listing. */
router.get('/:userid', 
	/**
		* Function to handle GET requests for user events page.
		* Render the events page, or return a 404 error if the userID is not in the MongoDB database,
		* or redirect to the login page with a 401 status code if the JSON web token does not verify.
		* @param {Object} req The express routing HTTP client request object,
		* whose parameters include the userID.
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

					if (!verify.checkLogin(req.cookies.jwt, user.email)) {
						res.status(401).redirect('/login');
						return;
					}

					res.render('events', {
					 	userId: userId,
						events: user.events
					});
				}
			});

});

module.exports = router;

function test(){
	

}