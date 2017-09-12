

function project1(){
var answer = 0;
var divisibleList = [];

for(i = 0; i < 1000; i++){

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

function project5(){

//Needs to be refactored to optimize calculation time.
//Re-factor could be done by reducing the list of numbers to chuck the modulus on.
//Or by incrementing the list by a larger number (2520) each time
var done = false;
var check = 1;
var j = 0;
while(!done){

for (var i = 1; i < 21; i++){

 if((check % i) != 0){

        j = 0;
        break;
				}
      else{
  
        j++;
        if(j === 19){
          console.log(check);
          done = true;
        }

      }
		} check++;
   
}

}

project1();
project2();