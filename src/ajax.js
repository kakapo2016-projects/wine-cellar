var request = require('superagent')
var path = require('path')

function getFromServer (callback) {

console.log("in getfromServer")

	request
		.get('http://localhost:3000/cellar')
		.end(callback)
}

function postToServer (object, callback) {
	request
		.post('http://localhost:3000/cellar')
		.send(object)
		.end(callback)
}

module.exports = {
	'getFromServer': getFromServer,
	'postToServer': postToServer
}
