var jwt = require('jsonwebtoken');

/**
	* Checks a login, using the provided cookie and email.
	* @param {Object} cookie The cookie provided by the client's browser.
	* @param {String} email The user's email.
	* @return {boolean} Whether the given cookie and email verify.
*/
var checkLogin = function (cookie, email) {
	var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
	if(cookie == null) {
		return false; // return 401
	}

	try {
		var decoded = jwt.verify(cookie, cert, {algorithms: ["HS256"]});

		if(!('usr' in decoded) || decoded.usr != email) {
			return false; // return 401
		}
	} catch (error) {
		return false;
	}

	return true;
}

module.exports = {
	checkLogin: checkLogin
};
