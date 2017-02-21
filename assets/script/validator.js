function addListeners(){

document.getElementById("idNumber").addEventListener("input", checkSocial);
document.getElementById("leapYear").addEventListener("input", leapYear);
document.getElementById("numberSum").addEventListener("input", numberSum);
}


function checkSocial(){

	var persNr=document.getElementById("idNumber").value;
	console.log(persNr); 
 
	if(persNr.indexOf('-')===-1)
	{
		if(persNr.length===10)
		{
	     persNr = persNr.slice(0, 6) + "-" + persNr.slice(6);
		 console.log(persNr);
        } 
        else
        {
         persNr= persNr.slice(0, 8) + "-" + persNr.slice(8);
         console.log(persNr);
        }
     }
     persNr=persNr.replace('-','');
        
        if(persNr.length===10) 
        {
          checkSumma(persNr);
        }

        if(persNr.length===12) 
        {
          persNr = persNr.substring(2);
          checkSumma(persNr);
        }
}

function checkSumma(persNr){

	     var y1=persNr.substring(0,1);
         var y2=persNr.substring(1,2);
         var m1=persNr.substring(2,3);
         var m2=persNr.substring(3,4);
         var d1=persNr.substring(4,5); 
         var d2=persNr.substring(5,6); 
         var x1=persNr.substring(6,7); 
         var x2=persNr.substring(7,8); 
         var x3=persNr.substring(8,9); 
         var x4=persNr.substring(9,10); 

      
      var summa =(y1*2%10)+Math.floor(y1*2/10)+(y2*1)+(m1*2%10)+Math.floor(m1*2/10)+(m2*1)+
      Math.floor(d1*2/10)+(d1*2%10)+(d2*1)+Math.floor(x1*2/10)+(x1*2%10)+(x2*1)+(x3*2%10)+Math.floor(x3*2/10);
      console.log(summa);
      summa=summa%10;
      console.log(summa);
      summa=10-summa;
      console.log(summa);
      

    if(summa===parseInt(x4)){
    	document.getElementById("idNumberResult").innerHTML = "TRUE";
    }
    else
        document.getElementById("idNumberResult").innerHTML = "FALSE";
}  
      
 
function leapYear(){
	var year = document.getElementById("leapYear").value;

	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
	{
		document.getElementById("leapYearResult").innerHTML = "This is a leapyear!";
	} else 
	{
		document.getElementById("leapYearResult").innerHTML = "This is not a leapyear!";
	}
}

function numberSum(){

	var input = document.getElementById("numberSum").value;
	var array= input.split("").map(Number);
	var sum = 0;
	
	for (var i = 0; i< array.length; i++){
		sum += array[i];
	}
	document.getElementById("numberSumResult").innerHTML = sum;
}



       




