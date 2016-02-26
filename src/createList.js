var getRequest = require(./getrequest)

module.exports =function(){

console.log("hello from create list")
getRequest(appendtoList)

}


function appendtoList(cellarData){
  $('#table').text('')
  cellarData.forEach( (item) => {
     $('#table').append('<div>' + item.varietal + '</div>')
  })
}
