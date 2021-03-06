var path = require('path')
var express = require('express')
var server = express()
var bodyParser = require('body-parser')
var fs = require('fs')

server.use(express.static(path.join(__dirname, "../public")))
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(function (req, res, next) {
  console.log(req.body) // populated!
  next()
})

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


server.post('/cellar', function (req, res) {
  console.log('body', req.body, typeof req.body)
 var bottle = req.body
  var dataPath = (__dirname + '/../data/db.json')
  fs.readFile(dataPath, 'utf8', function(err, data) {
    if (err) {
      console.log(err, 'err')
    }
    else { 
        var cellar = JSON.parse(data).cellar 
        cellar.push(bottle)
        JSON.stringify(cellar)
        var cellarString = '{"cellar":' + JSON.stringify(cellar) + ' }'
         fs.writeFile('./data/db.json', cellarString, function (err, data) {
            console.log('this has worked')
            res.json(cellar)
          })
    }
  })
})


module.exports = server