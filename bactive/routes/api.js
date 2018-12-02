var express = require('express');
var router = express.Router();
var verify = require('./verify');
const bcrypt = require('bcryptjs');

router.get('/event',
	function(req, res, next) {
	var db = req.app.locals.db;
	db.collection('Events')
		.find().toArray(function(err, result) {
			res.status(200).json(result);
		});
});


router.post('/event',
	function(req, res, next) {
	var db = req.app.locals.db;
	db.collection('Values')
		.findOne({'name': 'Events'}, function(err, result) {
				if(req.body.event === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				var eventId = Number(result.maxEventId);
				db.collection('Values').updateOne({'name': 'Events'}, {'maxEventId': eventId + 1}, function(err, result) {
					var event = JSON.parse(req.body.event)
					event.eventId = eventId + 1;
					db.collection('Events').insertOne(event, function(err, result) {
						res.status(200).send('OK');
					});
				});
		});
});

router.delete('/event',
	function(req, res, next) {
	if(req.body.eventId === undefined) {
		res.status(400).send('Bad request');
		return;
	}
	var db = req.app.locals.db;
	db.collection('Events')
		.deleteOne({'eventId': Number(req.body.eventId)}, function(err, results) {
			res.status(200).send('OK');
		});
});

router.get('/:userid',
	function(req, res, next) {
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
});

router.put('/availability/:userid',
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
				if(req.body.availability === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				var updated = {$set: {availability: JSON.parse(req.body.availability.replace(/([^\[\],\s]+)/g, '$&'))}};
				db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
					res.status(200).send('OK');
				});
			}
		});
});

router.put('/password/:userid',
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
});

router.post('/activity/:userid',
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
				if(req.body.activity === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				user.activities.push(JSON.parse(req.body.activity));
				var updated = {$set: {activities: user.activities}};
				db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
					res.status(200).send('OK');
				});
			}
		});
});

router.put('/activity/:userid',
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
				if(req.body.activity === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				var updated_activity = JSON.parse(req.body.activity);
				var ind = user.activities.findIndex(cur => cur.name === updated_activity.name);
				if (ind === -1) {
					res.status(400).send('Bad request');
					return;
				}
				user.activities[ind] = updated_activity;
				var updated = {$set: {activities: user.activities}};
				db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
					res.status(200).send('OK');
				});
			}
		});
});

router.delete('/activity/:userid',
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
});

router.post('/activity/:userid',
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
				if(req.body.activity === undefined) {
					res.status(400).send('Bad request');
					return;
				}
				user.activities.push(JSON.parse(req.body.activity));
				var updated = {$set: {activities: user.activities}};
				db.collection('Users').updateOne({'userId': userId}, updated, function(err, result) {
					res.status(200).send('OK');
				});
			}
		});
});

router.put('/rate/:userid',
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
});

module.exports = router;
