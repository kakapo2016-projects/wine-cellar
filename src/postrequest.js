var request = require('superagent')
var path = require('path')

module.exports = function (object) {
	request
		.post('http://localhost:3000/cellar')
		.send(object)
		.end()
}
