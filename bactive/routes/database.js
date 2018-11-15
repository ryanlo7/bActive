
var routerProperties = function(req, res, next) {
	return {
		req: req, 
		res: res,
		next: next
	};
}

var insertUser = function(properties, email, password) {
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
				res.status(404).send(`Email already in use`);
				return;
			}

			valuesCollection.find({"name": "Users"}).toArray(function(err, resId) {
				if (err) {
					next(err);
					return;
				}
				let maxUserId = resId[0].maxUserId;
				let newUser = {
					userId: maxUserId,
					email: email,
					password: password,
					availability: [],
					activities: [],
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
						res.status(201).render('profile', {
							userId: newUser.userId,
							email: newUser.email,
							activities: newUser.activities,
							availability: newUser.availability,
							events: newUser.events
						});
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
	routerProperties: routerProperties
};