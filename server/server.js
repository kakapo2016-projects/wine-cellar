var path = require('path')
var express = require('express')
var server = express()


server.set('port', 3000)

var listenServer = server.listen(server.get('port'), function () {
  var port = listenServer.address().port
  console.log("Server Now Active At Port: ", port)
})

server.use(express.static(path.join(__dirname, "../public")))


