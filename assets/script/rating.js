//GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=9e9354cb2ae48476&recipe=fudge_browney
//GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=9e9354cb2ae48476&recipe=fudge_browney&rating=4
//API-nyckel är 9e9354cb2ae48476

var elements =document.getElementsByClassName('star');
var rating;
var votes;
var output;
var JSONObject;


window.onload = loadRating();

    for(var i=0;i<elements.length;i++){
        elements[i].value=5-i;
        elements[i].addEventListener("click",voteAndLoad);
      }


function voteAndLoad(){
   vote=(this.value);
   addVote();
   loadRating();
}

function loadRating(){

	var xhttp = new XMLHttpRequest();
	var JSONrating,votes;
	xhttp.onreadystatechange = function (){
		
		if(this.readyState === 4 && this.status === 200){
		
			var response = this.responseText;
			JSONObject = JSON.parse(this.responseText);
			rating = JSONObject.rating;
			votes = JSONObject.votes;
			console.log(response);
			document.getElementById("nrOfVotes").innerHTML=votes;
            setStarValue(rating);
		}
	}
xhttp.open("GET","https://edu.oscarb.se/sjk15/api/recipe/?api_key=9e9354cb2ae48476&recipe=fudge_browney",true);
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

