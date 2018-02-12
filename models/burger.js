var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.selectAll(function(res) {
			cb(res);
		});
	},

	create: function(val, cb) {
		orm.insertOne(val, function(res) {
			cb(res);
		});
	},

	update: function(val, cb) {
		orm.updateOne(val, function(res) {
			cb(res);
		});
	}
};