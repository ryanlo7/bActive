var express = require('express');
var router = express.Router();
var verify = require('./verify');
const bcrypt = require('bcryptjs');

/**
	* Middleware function to get event from database.
	* API to access this function: GET /api/event
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var getEvent = function(req, res, next) {
	var db = req.app.locals.db;
	db.collection('Events')
		.find().toArray(function(err, result) {
			res.status(200).json(result);
		});
}

router.get('/event', getEvent);

/**
	* Middleware function to get events from database that user with id userid is invited to.
	* API to access this function: GET /api/events/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var getEventsUserID = function(req, res, next) {
	var db = req.app.locals.db;
	var userId = parseInt(req.params.userid);
	db.collection('Events')
		.find({'invitedIds': userId}).toArray(function(err, result) {
			res.status(200).json(result);
		});
}

router.get('/events/:userid', getEventsUserID);

/**
	* Middleware function to get events from database that user with id userid has been matched to.
	* API to access this function: GET /api/matchedevents/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var getMatchedEventsUserID = function(req, res, next) {
	var db = req.app.locals.db;
	var userId = parseInt(req.params.userid);
	db.collection('Events')
		.find({'invitedIds': userId, 'status': 'matched'}).toArray(function(err, result) {
			res.status(200).json(result);
		});
}


router.get('/matchedevents/:userid', getMatchedEventsUserID);

/**
	* Middleware function to get confirmed events from database that user with id userid has been matched to.
	* API to access this function: GET /api/confirmedevents/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var getConfirmedEventsUserID = function(req, res, next) {
	var db = req.app.locals.db;
	var userId = parseInt(req.params.userid);
	db.collection('Events')
		.find({'invitedIds': userId, 'status': 'confirmed'}).toArray(function(err, result) {
			res.status(200).json(result);
		});
}


router.get('/confirmedevents/:userid', getConfirmedEventsUserID);

/**
	* Middleware function to get pending events from database that user with id userid has been matched to.
	* API to access this function: GET /api/pendingevents/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var getPendingEventsUserID = function(req, res, next) {
	var db = req.app.locals.db;
	var userId = parseInt(req.params.userid);
	db.collection('Events')
		.find({'invitedIds': userId, 'status': 'pending'}).toArray(function(err, result) {
			res.status(200).json(result);
		});
}

router.get('/pendingevents/:userid', getPendingEventsUserID);

/**
	* Middleware function to post an event to the database.
	* API to access this function: POST /api/event
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var postEvent = function(req, res, next) {
	var db = req.app.locals.db;
	db.collection('Values')
		.findOne({'name': 'Events'}, function(err, result) {
				if(req.body.event === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				var eventId = Number(result.maxEventId);
				db.collection('Values').updateOne({'name': 'Events'}, {'maxEventId': eventId + 1}, function(err, result) {
					var event = req.body.event;
					event.eventId = eventId + 1;
					db.collection('Events').insertOne(event, function(err, result) {
						res.status(200).send('OK');
					});
				});
		});
}

router.post('/event', postEvent);

/**
	* Middleware function to update event in database with id eventId.
	* API to access this function: PUT /api/event/:eventId
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var putEventEventID = function(req, res, next) {
	var eventId = parseInt(req.params.eventId);
	var db = req.app.locals.db;
	var event = req.body.event;
	console.log(event);
	var updateObj = { $set: {acceptedIds: event.acceptedIds,
									status: event.status} };

	db.collection('Events').updateOne({'eventId': eventId}, updateObj, function(err, result) {
					if (err) {
						console.log(errorHandler(err));
					}
					res.status(200).send('OK');

				});
}

router.put('/event/:eventId', putEventEventID);

/**
	* Middleware function to delete event in database with id eventId.
	* API to access this function: DELETE /api/event/:eventId
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var deleteEventEventID = function(req, res, next) {
	var eventId = parseInt(req.params.eventId);
	var db = req.app.locals.db;
	db.collection('Events')
		.deleteOne({'eventId': eventId}, function(err, results) {
			res.status(200).send('OK');
		});
}

router.delete('/event/:eventId', deleteEventEventID);

/**
	* Middleware function to get array of JSON objects representing all users.
	* API to access this function: GET /api/users
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var getUsers = function(req, res, next) {
	var db = req.app.locals.db;
	var userId = parseInt(req.params.userid);
	var included_fields = {'userId': true, 'name': true, 'email': true, 'rating': true, 'activities': true, 'availability': true, 'events': true, '_id': false};
	db.collection('Users')
		.find().project(included_fields)
		.toArray(function(err, results) {
			if (results.length == 0) {
				res.status(404).send("404: userId not found");
			} else {
				res.status(200).json(results);
			}
		});
}

router.get('/users', getUsers);

/**
	* Middleware function to get user with id userid.
	* API to access this function: GET /api/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var getUserID = function(req, res, next) {
	var db = req.app.locals.db;
	var userId = parseInt(req.params.userid);
	var included_fields = {'userId': true, 'name': true, 'email': true, 'rating': true, 'activities': true, 'availability': true, 'events': true, '_id': false};
	db.collection('Users')
		.find({'userId': userId}).project(included_fields)
		.toArray(function(err, results) {
			if (results.length == 0) {
				res.status(404).send("404: userId not found");
			} else {
				user = results[0]; // should only be one match
				res.status(200).json(user);
			}
		});
}

router.get('/:userid', getUserID);

/**
	* Middleware function to put a name into the user with id userid.
	* API to access this function: PUT /api/name/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var putNameUserID = function(req, res, next) {
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
				if(req.body.name === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				var updated = {$set: {name: req.body.name}};
				db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
					res.status(200).send('OK');
				});
			}
		});
}

router.put('/name/:userid', putNameUserID);

/**
	* Middleware function to update an availability cell for user with id userid.
	* API to access this function: PUT /api/availability/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var putAvailabilityUserID = function(req, res, next) {
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
				if(req.body.availability === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				var updated = {$set: {availability: req.body.availability}};
				db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
					res.status(200).send('OK');
				});
			}
		});
}

router.put('/availability/:userid', putAvailabilityUserID);

/**
	* Middleware function to update the password for user with id userid.
	* API to access this function: PUT /api/password/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var putPasswordUserID = function(req, res, next) {
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
				if(req.body.password === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				bcrypt.hash(req.body.password, 10, function(err, hash) {
					var updated = {$set: {password: hash}};
					db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
						res.status(200).send('OK');
					});
				});
			}
		});
}

router.put('/password/:userid', putPasswordUserID);

/**
	* Middleware function to update an activity for user with id userid.
	* API to access this function: POST /api/activity/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var postActivityUserID = function(req, res, next) {
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
				if(req.body.activity === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				user.activities = req.body.activity;
				var updated = {$set: {activities: user.activities}};
				db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
					res.status(200).send('OK');
				});
			}
		});
}

router.post('/activity/:userid', postActivityUserID);

// router.put('/activity/:userid',
	// function(req, res, next) {
	// var db = req.app.locals.db;
	// var userId = parseInt(req.params.userid);
	// db.collection('Users')
		// .find({'userId': userId})
		// .toArray(function(err, results) {
			// if (results.length == 0) {
				// res.status(404).send("404: userId not found");
			// } else {
				// user = results[0]; // should only be one match

				// if (!verify.checkLogin(req.cookies.jwt, user.email)) {
					// res.status(401).redirect('/login');
					// return;
				// }
				// if(req.body.activity === undefined) {
					// res.status(400).send('Bad request');
					// return;
				// }
				// var updated_activity = JSON.parse(req.body.activity);
				// var ind = user.activities.findIndex(cur => cur.name === updated_activity.name);
				// if (ind === -1) {
					// res.status(400).send('Bad request');
					// return;
				// }
				// user.activities[ind] = updated_activity;
				// var updated = {$set: {activities: user.activities}};
				// db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
					// res.status(200).send('OK');
				// });
			// }
		// });
// });

/**
	* Middleware function to delete an activity for user with id userid.
	* API to access this function: DELETE /api/activity/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var deleteActivityUserID = function(req, res, next) {
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
				if(req.body.activity === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				var ind = user.activities.findIndex(cur => cur.name === req.body.activity);
				if (ind === -1) {
					res.status(400).send('Bad request');
					return;
				}
				user.activities.splice(ind, 1);
				var updated = {$set: {activities: user.activities}};
				db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
					res.status(200).send('OK');
				});
			}
		});
}

router.delete('/activity/:userid', deleteActivityUserID);

/**
	* Middleware function to let a user rate another user for an event.
	* API to access this function: PUT /api/rate/:userid
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Void}
*/
var putRateUserID = function(req, res, next) {
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
				if(req.body.score === undefined || req.body.ratee === undefined || req.body.eventId === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				var userId2 = parseInt(req.body.ratee);
				var ind = user.events.findIndex(cur => Number(req.body.eventId) === cur.eventId);
				if (ind === -1) {
					res.status(400).send('Bad request');
					return;
				}
				var new_ind = user.events[ind].rated.indexOf(userId2);
				if (new_ind !== -1) {
					res.status(400).send('Bad request');
					return;
				}
				user.events[ind].rated.push(userId2);

				db.collection('Users')
					.find({'userId': userId2})
					.toArray(function(err, results2) {
						if (results2.length == 0)
							res.status(404).send("404: userId not found");
						user2 = results2[0]; // should only be one match
						user2.rating.scoreSum += Number(req.body.score);
						user2.rating.numRatings += 1;
						var updated = {$set: {rating: user2.rating}};
						db.collection('Users').updateOne({'userId': userId2}, updated, function(err, result) {
							updated = {$set: {events: user.events}}
							db.collection('Users').updateOne({'userId': userId}, updated, function(err, result2) {
								res.status(200).send('OK');
							});
						});
				});
			}
		});
}

router.put('/rate/:userid', putRateUserID);

module.exports = router;
