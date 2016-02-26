var request = require('superagent')
var path = require('path')

module.exports = function (callback) {
	request
		.get('http://localhost:3000/cellar')
		.end(callback)
}

