var test = require('tape')
var request = require('supertest')
var app = require('../server/server')

var expectedWine = [ 

					{ "varietal": "sauv",
					    "qty": 6},

					 {"varietal": "merlot",
					  "qty": 2},

					  {"varietal": "pinot gris",
					    "qty": 99}

					]

test('/returns the correct wine', function (t) {
	request(app)
	  .get('/cellar')
	  .expect('Content type', /JSON/)
	  .expect(200)
	  .end(function (err, res) {
	  	console.log(res)
	  	t.equal(res.type, 'application/json', 'application/json')
	  	t.equal(res.status, 200, 'status code 200')
	  	t.equal(res.body.length, 3, 'correct length')
	  	expectedWine.forEach(function (wine) {
	  		t.ok(res.body.indexOf(wine.varietal) > -1, 'requested array contains varietal: ' + varietal)
	  	})
	  })
	  t.end()
})


