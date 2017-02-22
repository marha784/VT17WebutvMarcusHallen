
var string="";
var summa= 0; 

function addListeners(){
	
var buttons=document.getElementsByClassName("calc__number");
var action=document.getElementsByClassName("calc__sign");

for(var i=0;i<buttons.length;i++){

        buttons[i].addEventListener("click",doMath);
  } 


for(var i=0;i<2;i++){

        action[i].addEventListener("click",doMath);
  } 
  action[2].addEventListener("click",calc)
}



   

function doMath(){
    
    var input=this.innerText;  
    
    string+=input;

	document.getElementById("result").innerHTML=string;

}

function calc(){

    summa=eval(string);
    console.log(string);
	console.log(summa);
	document.getElementById("result").innerHTML=summa;
	string="";
}