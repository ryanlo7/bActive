var jwt = require('jsonwebtoken');

module.exports = {
	checkLogin: function (cookie, email) {
		var cert = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
		if(cookie == null) {
			console.log('no cookie');
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
};
