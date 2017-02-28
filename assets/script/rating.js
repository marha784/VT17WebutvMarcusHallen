//GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=9e9354cb2ae48476&recipe=fudge_browney
//GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=9e9354cb2ae48476&recipe=fudge_browney&rating=4
//API-nyckel är 9e9354cb2ae48476

var elements =document.getElementsByClassName('star');
var rating;
var votes;
var output;
var JSONObject="";
var response="";

window.onload = loadRating();
window.omload = loading();

    for(var i=0;i<elements.length;i++){
        elements[i].value=5-i;
        elements[i].addEventListener("click",voteAndLoad);
      }


function voteAndLoad(){
   vote=(this.value);
   console.log("your vote is "+vote);
   loading();
   addVote();
   loadRating();
}

function loadRating(){

	var xhttp = new XMLHttpRequest();
	var JSONrating,votes;
	xhttp.onreadystatechange = function (){
		
		if(this.readyState === 4 && this.status === 200){
		   
			response = this.responseText;
			JSONObject = JSON.parse(this.responseText);
			rating = JSONObject.rating;
			votes = JSONObject.votes;
			console.log(response);
			document.getElementById("nrOfVotes").innerHTML=votes+" röster";
      setStarValue(rating);
		}
	}
xhttp.open
("GET","https://edu.oscarb.se/sjk15/api/recipe/?api_key=9e9354cb2ae48476&recipe=fudge_browney",true);
xhttp.send();	
}


function addVote(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){

       if(this.readyState === 4 && this.status === 200){
			var response = this.responseText;
			JSONObject = JSON.parse(this.responseText);
			console.log(response);
		}
    }
xhttp.open("GET","https://edu.oscarb.se/sjk15/api/recipe/?api_key=9e9354cb2ae48476&recipe=fudge_browney&rating="+vote,true);
xhttp.send(); 
}

function setStarValue(rating){
   
   this.rating=rating;
   rating=Math.floor(rating);
   console.log(rating);

  for(var i=0;i<rating;i++){

  	 elements[4-i].innerHTML="&#x2605;";
  }
  
}


function loading(){

     document.getElementById('load').style.visibility="visible";
	   document.getElementById('nrOfVotes').style.visibility="hidden";
       document.getElementsByClassName('star')[0].style.visibility="hidden";
       document.getElementsByClassName('star')[1].style.visibility="hidden";
       document.getElementsByClassName('star')[2].style.visibility="hidden";
       document.getElementsByClassName('star')[3].style.visibility="hidden";
       document.getElementsByClassName('star')[4].style.visibility="hidden";

setTimeout(function(){
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('nrOfVotes').style.visibility="visible";
         document.getElementsByClassName('star')[0].style.visibility="visible";
         document.getElementsByClassName('star')[1].style.visibility="visible";
         document.getElementsByClassName('star')[2].style.visibility="visible";
         document.getElementsByClassName('star')[3].style.visibility="visible";
         document.getElementsByClassName('star')[4].style.visibility="visible";
      },5000);

}