var server = require('./server')


server.set('port', 3000)

var listenServer = server.listen(server.get('port'), function () {
  var port = listenServer.address().port
  console.log("Server Now Active At Port: ", port)
})

