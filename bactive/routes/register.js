var express = require('express');
var router = express.Router();

const collectionName = 'Users';
const defaultAvailability = {
	"sunday": [false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
	"monday": [false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
	"tuesday": [false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
	"wednesday": [false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
	"thursday": [false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
	"friday": [false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
	"saturday": [false, false, false, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
};

/* GET new user registration. */
router.get('/', function(req, res, next) {
  	res.render('register', {});
});

/* POST new user registration */
router.post('/', function(req, res, next) {
	let email = req.body.email;
	let password = req.body.password;
	let pass_confirm = req.body.password_confirmation;
	if (email === "" || password === "" || pass_confirm === "") {
		res.status(400).send('Error: the email and passwords fields must not be blank');
		return;
	}
	if (password !== pass_confirm) {
		res.status(400).send('Error: the passwords do not match');
	}

	let db = req.app.locals.db;
	const collection = db.collection(collectionName);
	var query = {"email": email};

	collection.find(query).toArray(
		function(err, result) {
			if (err) {
				next(err);
				return;
			}
			if (result.length !== 0) {
				res.status(404).send(`User with given email already exists`);
				return;
			}

			db.collection("Values").find({"name": collectionName}).toArray(function(err, resId) {
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
					events: []
				};
				collection.insertOne(newUser, function (err, insertResult) {
					if (err) {
						next(err);
						return;
					}
					let newValue = {$set: {"maxUserId": maxUserId + 1}}; // this is buggy
					db.collection("Values").updateOne({"name": "Users"}, newValue, function(err, updateResult) {
						if (err) {
							next(err);
							return;
						}
						res.status(201).send('Successfully inserted new user into db.');
						return;
					});
				});
			});
			return;
		}
	);
});

module.exports = router;
