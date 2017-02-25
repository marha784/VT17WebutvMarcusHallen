
var baseIngr = [];

function updateRecipe() {

    "use strict";
    var i, numCakes, asideElement, ingrList;
    numCakes= document.getElementById("numCakes").value/15;
    
    asideElement = document.getElementsByClassName("content_left")[0];
    ingrList = asideElement.getElementsByTagName("li");
    for (i = 0; i < ingrList.length; i++) {
        var tempStr = ingrList[i].textContent; 
        var tempNumber = parseInt(tempStr.match(/[0-9]+/));
        console.log(tempNumber);
        if (typeof (baseIngr[i]) === "undefined") {
            baseIngr[i] = tempNumber;
        }
        tempNumber = baseIngr[i] * numCakes;
        tempStr = tempStr.replace(/[0-9]+/, tempNumber);
        ingrList[i].textContent = tempStr;
    }
}

window.oninput = function () {
    "use strict";
updateRecipe();
};

function updateTextInput(val) {
 if(val===" "){
 document.getElementById("textInput").value=15; 
 }
 document.getElementById("textInput").value=val; 
}