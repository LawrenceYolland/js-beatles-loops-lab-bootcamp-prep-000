// add solution here
var newArray = [];

function theBeatlesPlay(musicianArray, instrumentArray){
  for (var i=0; i<musicianArray.length; i++) {
    newArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`
  }
  return newArray
}