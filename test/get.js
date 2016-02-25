var test = require('tape')
var request = require('supertest')
var app = require('../server/server')

var expectedWine = [ 

					{ "varietal": "chardonnay",
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
	  	t.equal(res.type, 'application/json', 'application/json')
	  	t.equal(res.status, 200, 'status code 200')
	  	t.equal(res.body.cellar.length, 3, 'correct length')
	  	t.deepEqual(expectedWine, res.body.cellar, "the actual data and expected data are the same")
	  })
	  t.end()
})


