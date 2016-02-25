var path = require('path')
var express = require('express')
var server = express()
var bodyParser = require('body-parser')
var fs = require('fs')

server.use(express.static(path.join(__dirname, "../public")))


// server.get('/cellar', function (req, res) {
//   res.send('Hello Gay!')
// })

server.get('/cellar', function (req, res) {
  var dataPath = (__dirname + '/../data/db.json')
  fs.readFile(dataPath, 'utf8', function(err, data) {
    if (err) {
      console.log(err, 'err')
    }
    else {
      res.json(JSON.parse(data))
    }
  })
})


module.exports = server