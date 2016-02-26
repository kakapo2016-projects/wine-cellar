var request = require('superagent')
var path = require('path')
var $ = require('jquery')

module.exports = function () {
	console.log('we are in getrequest')
	request
		.get('http://localhost:3000/cellar')
		.end(function(err, res) {
			console.log(res.body.cellar)
			appendtoList(res.body.cellar)
		})
}


function appendtoList(cellarData){
	// var cellarArray = []
	console.log(cellarData)


  $('#table').text('')
  $('#table').append('<table><tr><th>Varietal</th><th>Quantity</th></tr>')
  cellarData.forEach( (item) => {
     $('#table').append('<tr><td>' + item.varietal + '</td><td>' + item.qty + '</td></tr>')
  })
  $('#table').append('</table')
}