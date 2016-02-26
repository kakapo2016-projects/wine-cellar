var $ = require('jquery')
var createList = require('./createList.js')
var postRequest = require('./postRequest')


// getRequest('http://localhost:3000/cellar', )




$(document).ready(function() {

  createList()

  $('#add').click(function() {
  	var newObj = {}
  	newObj['varietal'] = $('#varietalInput').val()
  	newObj['qty'] = $('#quantityInput').val()
	console.log('click')
	postRequest(newObj)
  })
})

