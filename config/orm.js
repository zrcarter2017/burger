var connection = require("../config/connection.js");

function selectAll() {
	var queryString = "SELECT * FROM burgers;"
	connection.query(queryString, function(err, result) {
		if (err) {
			throw err;
		}
		return result;
	});
}

function insertOne(userInput) {
	var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + userInput + "');";
	connection.query(queryString, function(err, result) {
		if (err) {
			throw err;
		}
		return result;
	});
}

function updateOne(id) {
	var queryString = "UDPATE burgers WHERE id = '" + id + "';";
	connection.query(queryString, function(err, result) {
		if (err) {
			throw err;
		}
		return result;
	})
}