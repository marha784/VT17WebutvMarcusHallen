
var string="";
var summa= 0;
var output=""; 

function addListeners(){
	
var buttons=document.getElementsByClassName("calc__number");
var action=document.getElementsByClassName("calc__sign");

for(var i=0;i<buttons.length;i++){

        buttons[i].addEventListener("click",input);
  } 


for(var i=0;i<2;i++){

        action[i].addEventListener("click",input);
  } 
  action[2].addEventListener("click",calculate)
}



   

function input(){
    
    var input=this.innerText;  
    
    string+=input;
    string=string.replace('++','+');
    string=string.replace('--','-');
    string=string.replace('+-','+');
    string=string.replace('-+','-');

	document.getElementById("result").innerHTML=string;

}

function calculate(){

    summa=eval(string);
    console.log(string);
    output+=string+"="+summa+"<br>";
    document.getElementById("results").innerHTML=output;
	console.log(summa);
	document.getElementById("result").innerHTML=summa;
	string="";
}