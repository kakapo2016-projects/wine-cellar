var $ = require('jquery')
var createList = require('./createList.js')
var postRequest = require('./postRequest')


// getRequest('http://localhost:3000/cellar', )




$(document).ready(function() {

  createList()

  $('#add').click(function() {
  	var newObj = {}
  	console.log($('#varietalInput').val())
  	newObj['varietal'] = $('#varietalInput').val()
  	newObj['qty'] = $('#quantityInput').val()
	console.log('click')
	console.log("This OBJECT", newObj)
	postRequest(newObj, createList())
  })
})

