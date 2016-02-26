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


server.post('/cellar', function (req, res) {
  console.log('body', req.body, typeof req.body)
 var bottle = req.body
  var dataPath = (__dirname + '/../data/db.json')
  console.log('dataPath', dataPath)
  fs.readFile(dataPath, 'utf8', function(err, data) {
    if (err) {
      console.log(err, 'err')
    }
    else { 
        var cellar = JSON.parse(data).cellar 
        // res.json(cellar)
        cellar.push(bottle)
        console.log(cellar)
        JSON.stringify(cellar)
        var cellarString = '{"cellar":' + JSON.stringify(cellar) + ' }'
        console.log('This is the cellarString', cellarString)
         fs.writeFile('./data/db.json', cellarString, function (err, data) {
            console.log('this has worked')
            res.json(cellar)
          })
    }
  })
})


// server.post
  // wine comes through on req
  // readFile db.json
  // append new wine to db.json
  // writeFile (new file)





// fs.writeFile('./data/db.json', 'HELLO GAY!', function (err, data) {
//   if (err) throw err
//     console.log('this has worked')
// })

//   res.send('THIS IS A POST REQUEST!')
// })



//add fs writeFile. 
//write data to file




module.exports = server