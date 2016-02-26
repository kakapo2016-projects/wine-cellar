var getRequest = require(./getrequest)

module.exports =function(){

getRequest(appendtoList)


	console.log("hello from create list")


}


function appendtoList(cellarData){
  $('#table').text('')
  cellarData.forEach( (item) => {
     $('#table').append('<div>' + item.varietal + '</div>')
  })
}
