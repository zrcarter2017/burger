var connection = require("../config/connection.js");

var orm = {

	selectAll: function(cb) {
		var queryString = "SELECT * FROM burgers;"
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	insertOne: function(userInput, cb) {
		var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + userInput + "');";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			return result;
		});
	},

	updateOne: function(id, cb) {
		var queryString = "UDPATE burgers SET devoured = true WHERE id = '" + id + "';";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			return result;
		})
	}
};

module.exports = orm;