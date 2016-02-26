var $ = require('jquery')
var createList = require('./createList.js')


// getRequest('http://localhost:3000/cellar', )


$(document).ready(function() {

  createList()

  $('#add').click(function() {
console.log('click')
//call post request
  })
})

