var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Get the /routes/*.js files here:
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var profileRouter = require('./routes/profile');
var matchRouter = require('./routes/match');
var eventsRouter = require('./routes/events');
var editRouter = require('./routes/edit');

var app = express();


// connection to MongoDB (must run db.sh first!):
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dbName = 'bActiveServer'; // database name is 'bActiveServer'
MongoClient.connect(url, 
	function(err, client) {
		assert.equal(null, err);
		console.log("Connected successfully to server");
		app.locals.db = client.db(dbName);
	}
);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect the /routes/*.js files to the url here:
app.use('/', indexRouter);
// app.use('/login', loginRouter);
app.use('/register', registerRouter);
// app.use('/profile', profileRouter);
app.use('/match', matchRouter);
app.use('/events', eventsRouter);
app.use('/edit', editRouter);

app.get('/login', function(req, res) {
	res.render('login', {});
});

app.post('/login', function(req, res) {
	var usr, pw;
	if (req.body.username === undefined || req.body.password === undefined) {
		res.status(400).send('Bad request');
		return;
	}
	usr = req.body.username;
	pw = req.body.password;
	var query = {email: usr};
	app.locals.db.collection('Users').findOne(query, function(err, result) {
		if(result === null) {
			res.status(401);
			res.render('login', {})
			return;
		}
		bcrypt.compare(pw, result.password, function(err, rs) {
			if(rs == true) {
				var payload = {"exp": Math.floor(Date.now() / 1000) + (2 * 60 * 60), "usr": usr};
				var header = {"alg": "HS256", "typ": "JWT"};
				var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
				jwt.sign(payload, cert, { algorithm: 'HS256',  header: header}, function(err, token) {
					res.cookie("jwt", token, {expires: 0});
					res.redirect('profile');
				});
			}
			else {
				res.status(401).render('login', {});
			}
		});
	});
});

app.get('/profile', function(req, res) {
	var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
	if(req.cookies.jwt === undefined) {
		res.status(401);
		res.render('login', {});
		return;
	}
	jwt.verify(req.cookies.jwt, cert, {algorithms: ["HS256"]}, function(err, decoded) {
		if(decoded === undefined) {
		res.status(401);
		res.render('login', {});
			return;
		}
		if(decoded.exp < Math.floor(Date.now() / 1000) ) {
			res.status(401);
			res.render('login', {});
			return;
		}
		res.render('profile', {});
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
