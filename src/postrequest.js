var request = require('superagent')
var path = require('path')

module.exports = function (object, callback) {
	request
		.post('http://localhost:3000/cellar')
		.send(object)
		.end(callback)
}
