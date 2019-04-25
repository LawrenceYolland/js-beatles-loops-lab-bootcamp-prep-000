// add solution here
var newArray = [];

function theBeatlesPlay(musicianArray, instrumentArray){
  for (var i=0; i<musicianArray.length; i++) {
    newArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`
  }
  return newArray
}

function johnLennonFacts(facts){
  var i=0
  while (i < facts.length){
    facts[i] = facts[i]+('!!!')
    i++
  }
  return facts
}


var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}
 
function iLoveTheBeatles(num){
  var empty = [];
  do {
  empty.push("I love the Beatles!")
  // console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < 15);}
  