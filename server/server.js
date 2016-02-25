var path = require('path')
var express = require('express')
var server = express()
var bodyParser = require('body-parser')


server.use(express.static(path.join(__dirname, "../public")))


server.get('/cellar', function (req, res) {
  res.send('Hello Gay!')
})

module.exports = server