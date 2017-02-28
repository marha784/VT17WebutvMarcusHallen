
var baseIngr = [];

function setLocalStorage(){
    if(typeof Storage !== "undefined")
    {
       // LocalStorage and sessionStorage support!
      if (window.localStorage.getItem("fudgeCount")) {
            var localCakeCount;
            localCakeCount = document.getElementById("piecesOfCake").value;
            window.localStorage.setItem("fudgeCount", localCakeCount);
        } else {
            window.localStorage.setItem("fudgeCount", 15);
        }
    }
}

function updateRecipe() {

    "use strict";
    var i, constant, content_left, ingList;
    constant= document.getElementById("piecesOfCake").value/15;
    
    content_left= document.getElementsByClassName("content_left")[0];
    ingList= content_left.getElementsByTagName("li");
    for (i = 0; i < ingList.length; i++) {
        var tempStr = ingList[i].textContent; 
        var tempNumber = parseInt(tempStr.match(/[0-9]+/));
        console.log(tempNumber);
        if (typeof (baseIngr[i]) === "undefined") {
            baseIngr[i] = tempNumber;
        }
        tempNumber = baseIngr[i] * constant;
        tempStr = tempStr.replace(/[0-9]+/, tempNumber);
        ingList[i].textContent = tempStr;
    }
    setLocalStorage();
}

function updateTextInput(val) {
 if(val===" "){
 document.getElementById("textInput").value=15; 
 }
 document.getElementById("textInput").value=val; 
}



window.oninput = function () {
    "use strict";
updateRecipe();
};


window.onload = function () {
    "use strict";
  
    if (typeof (Storage) !== "undefined") {
        if (window.localStorage.getItem("fudgeCount")) {
            document.getElementById("piecesOfCake").value = parseInt(window.localStorage.getItem("fudgeCount"));
            updateRecipe();
            document.getElementById("textInput").value=document.getElementById("piecesOfCake").value;
        }
    }
};