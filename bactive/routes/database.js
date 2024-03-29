var jwt = require('jsonwebtoken');
/**
	* Function to return a JSON object containing the express router properties.
	* @param {Object} req The express routing HTTP client request object.
	* @param {Object} res The express routing HTTP client response object.
	* @param {callback} next The express routing callback function to invoke next middleware in the stack.
	* @return {Object} A JSON object that holds req, res, and next.
*/
var routerProperties = function(req, res, next) {
	return {
		req: req,
		res: res,
		next: next
	};
}

/**
	* Function to search for all users meeting a criteria.
	* The server returns a 404 error if no users matching criteria are found.
	* @param {Object} properties JSON object containing the express router properties.
	* @param {Object} criteria JSON object to determine the search criteria for the user(s) we wish to find.
	* @param {callback} processUsers A callback function to be invoked on the resulting set of users found.
	* @return {Void}
*/
var searchUsers = function(properties, criteria, results, processUsers) {
	let req = properties.req;
	let res = properties.res;
	let next = properties.next;

	let db = req.app.locals.db;
	const userCollection = db.collection("Users");

	userCollection.find(criteria).toArray(function(err, users) {
		if (err) {
			next(err);
			return;
		}
		if (users.length === 0) {
			res.status(404).send(`Unable to find users that met search criteria`);
			return;
		}
		processUsers(users, results);
	});
}

// var searchEvents = function(properties, criteria, processEvents) {
// 	let req = properties.req;
// 	let res = properties.res;
// 	let next = properties.next;

// 	let db = req.app.locals.db;
// 	const eventCollection = db.collection("Events");

// 	eventCollection.find(criteria).toArray(function(err, events) {
// 		if (err) {
// 			next(err);
// 			return;
// 		}
// 		if (events.length === 0) {
// 			res.status(404).send(`Unable to find events that met search criteria`);
// 			return;
// 		}
// 		processEvents(events);
// 	});
// }

// var searchActivities = function(properties, criteria, processActivities) {
// 	let req = properties.req;
// 	let res = properties.res;
// 	let next = properties.next;

// 	let db = req.app.locals.db;
// 	const activityCollection = db.collection("Activities");

// 	activityCollection.find(criteria).toArray(function(err, activities) {
// 		if (err) {
// 			next(err);
// 			return;
// 		}
// 		if (activities.length === 0) {
// 			//res.status(404).send(`Unable to find activities that met search criteria`);
// 			return;
// 		}
// 		processActivities(activities);
// 	});
// }

/**
	* Function to return update a user's data in Users collection in MongoDB.
	* The server returns a 404 error if unable to find a matching user in the database.
	* Returns a 201 if it succesfully updates user data.
	* @param {Object} properties JSON object containing the express router properties.
	* @param {string} email The email of the user whose fields we wish to update.
	* @param {Object} updateSet JSON object containing the data we wish to update.
	* @return {Void}
*/
var updateUser = function(properties, email, updateSet) {
	let req = properties.req;
	let res = properties.res;
	let next = properties.next;

	let db = req.app.locals.db;
	const userCollection = db.collection("Users");

	userCollection.findOne({"email": email}, function(err, resultUser) {
		if (err) {
			next(err);
			return;
		}
		if (result.length === 0) {
			res.status(404).send(`Unable to find user with email`);
			return;
		}
		userCollection.updateOne({"email": email}, updateSet, function(err, updateResult) {
			if (err) {
				next(err);
				return;
			}
			res.status(201).send(`Successfully updated user data`);
			return;
		});
	});
}

/**
	* Function to insert a new user into the Users collection in MongoDB.
	* The server returns a 404 error if the email in the request body is already in use.
	* Otherwise it creates a new user with the given userID and hashed password,
	* default availabilities, and no activities or events, and adds it to the MongoDB database,
	* returning a 201 status code.
	* @param {Object} properties JSON object containing the express router properties.
	* @param {string} name The name of the new user.
	* @param {string} email The email of the new user.
	* @param {string} password The password of the new user that is encrypted with bcrypt.
	* @return {Void}
*/
var insertUser = function(properties, name, email, password) {
	let req = properties.req;
	let res = properties.res;
	let next = properties.next;

	let db = req.app.locals.db;
	const userCollection = db.collection("Users");
	const valuesCollection = db.collection("Values");

	userCollection.find({"email": email}).toArray(
		function(err, result) {
			if (err) {
				next(err);
				return;
			}
			if (result.length !== 0) {
				// res.status(404).send(`Email already in use`);
				res.status(404).render('register', {err: 'Email already in use.'});
				return;
			}

			valuesCollection.find({"name": "Users"}).toArray(function(err, resId) {
				if (err) {
					next(err);
					return;
				}
				let maxUserId = resId[0].maxUserId;

				let defaultAvailability = [];
				for (let i = 0; i < 7; i++) {
					let week = [];
					for (let j = 0; j < 48; j++) {
						week.push(false);
					}
					defaultAvailability.push(week);
				}

				let newUser = {
					userId: maxUserId,
					name: name,
					email: email,
					password: password,
					rating: { "scoreSum": 0, "numRatings": 0},
					activities: [],
					availability: defaultAvailability,
					events: []
				};
				userCollection.insertOne(newUser, function (err, insertResult) {
					if (err) {
						next(err);
						return;
					}
					let newValue = {$set: {"maxUserId": maxUserId + 1}}; // this is buggy
					valuesCollection.updateOne({"name": "Users"}, newValue, function(err, updateResult) {
						if (err) {
							next(err);
							return;
						}

						var payload = {"exp": Math.floor(Date.now() / 1000) + (2 * 60 * 60), "usr": newUser.email, "userId": newUser.userId};
						var header = {"alg": "HS256", "typ": "JWT"};
						var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
						jwt.sign(payload, cert, { algorithm: 'HS256',  header: header}, function(err, token) {
							res.cookie("jwt", token, {});
							res.redirect(`/active/#/profile/${newUser.userId}`);
						});
						return;
					});
				});
			});
			return;
		}
	);
}



/**
	* Function to insert a new event into the Events collection in MongoDB.
	* The server returns a 404 error if the event in the request body is already in use.
	* Otherwise it creates a new event with the given ,
	* and adds it to the MongoDB database,
	* returning a 201 status code.
	* @param {Object} properties JSON object containing the express router properties.
	* @param {string} email The email of the new user.
	* @param {string} password The password of the new user that is encrypted with bcrypt.
	* @return {Void}
*/
var insertEvent = function(properties, myUserId, friendUserId, activity, startTime, endTime, location) {
	let req = properties.req;
	let res = properties.res;
	let next = properties.next;

	let db = req.app.locals.db;
	const eventCollection = db.collection("Events");
	const valuesCollection = db.collection("Values");

	var invitedIds = [myUserId, friendUserId];
	invitedIds.sort();


	eventCollection.find({"invitedIds": invitedIds, "activity": activity, "startTime": startTime, "endTime": endTime}).toArray( //check invitedIds, activity, startTime, endTime aren't in
		function(err, result) {
			if (err) {
				next(err);
				return;
			}
			if (result.length !== 0) { //event already exists
				//res.status(404).send(`Event already in use`);
				res.status(404).render('register', {err: 'Event already in use.'});
				return;
			}


			//console.log(valuesCollection);
			valuesCollection.find({"name": "Users"}).toArray(function(err, resId) { //to get maxEventId for new eventId
				if (err) {
					next(err);
					return;
				}
				console.log(resId);
				// console.log(resId);

				let maxEventId = resId[0].maxEventId; //grab maxEventId from Values collection

				let newEvent = {
					eventId: maxEventId,
					acceptedIds: [],
					invitedIds: invitedIds,
					activity: activity,
					startTime: startTime,
					endTime: endTime,
					status: "matched",
					location: location
				};
				eventCollection.insertOne(newEvent, function (err, insertResult) { //insert event to db
					if (err) {
						next(err);
						return;
					}
					let newValue = {$set: {"maxEventId": maxEventId + 1}}; // this is buggy?
					valuesCollection.updateOne({"name": "Events"}, newValue, function(err, updateResult) { //update maxEventId in Values collection
						if (err) {
							next(err);
							return;
						}

						next();
						//res.redirect(`/active/match/${myUserId}`);

						// res.status(201).render('match', {
						// 	newEvent
						// });
						return;
					});
				});
			});
			return;
		}
	);
}



module.exports = {
	insertUser: insertUser,
	insertEvent: insertEvent,
	updateUser: updateUser,
	searchUsers: searchUsers,
//	searchActivities: searchActivities,
	routerProperties: routerProperties
};
