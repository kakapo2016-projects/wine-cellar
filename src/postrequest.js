var request = require('superagent')
var path = require('path')

module.exports = function (object, callback) {
	var newString = JSON.stringify(object)
	console.log(typeof newString, newString)
	request
		.post('http://localhost:3000/cellar')
		.send(newString)
		.end(callback)
}
