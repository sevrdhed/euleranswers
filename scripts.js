

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

project1();