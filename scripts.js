

function project1(){
var answer = 0;
var target = 1000;
var divisibleList = [];

for(i = 0; i < target; i++){

		if(i%3 === 0 || i%5 === 0){
    divisibleList.push(i);
    
    }
    
}


for(j = 0; j < divisibleList.length; j++){
  
  answer = answer + divisibleList[j];
}
$('.project1').append(answer);
}

function project2(){

var total = 0;
var fibTermOne = 1;
var fibTermTwo = 2;

while(fibTermTwo < 4000000){
  if(fibTermTwo%2 === 0){
    total = total + fibTermTwo;
  }
  console.log(fibTermTwo);
  var storage = fibTermTwo
  fibTermTwo = fibTermOne + fibTermTwo;
  fibTermOne = storage;
    console.log(" Total: " + total);
  

}

  $('.project2').append(total);
}

project1();
project2();