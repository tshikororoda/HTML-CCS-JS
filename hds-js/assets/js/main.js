"use strict";

function jsIsAdded(){
	
	alert("Congradulation, you have successfull load JavaScript");
}

function currentYear(){
 
	let currentDate, year, thisYear, tdaCopyright; // Declaring variables
	
	currentDate = new Date(); // Create an object for Date()
	year 		= currentDate.getFullYear(); // Get the current year
	thisYear 	= document.createTextNode(year); // Create text node 
	
	tdaCopyright = document.querySelector('#tda-copyright'); // Get/select the element using id selector [The reference node]
	tdaCopyright.parentNode.insertBefore(thisYear, tdaCopyright); //  Insert output into the element
	
		/* CSS */
	tdaCopyright.style.color = 'tomato'; // Does not effects appended text at all
	tdaCopyright.parentNode.style.color = 'slateblue'; // Effects appended text only
	
}


function partOfTheDay(){
	
	let currentDate		= new Date();
	let numberOfHours	= currentDate.getHours();
	let contentText;
	let outPutText;
	let tdaBrand ;
	
	if(numberOfHours >= 5 && numberOfHours < 12) {
		
		if(numberOfHours >= 5 && numberOfHours <= 8 ){
			
			contentText = "Hi, is early morning";
			
		}else{
			contentText = "Hi, is late morning";
		}
		
	}else if(numberOfHours >= 12 && numberOfHours < 17) {
			
		if(numberOfHours >= 12 && numberOfHours <= 15 ){
			
			contentText = "Hi, is early afternoon";
			
		}else{
			
			contentText = "Hi, is late afternoon";
		}
		
	}else if(numberOfHours >= 17 && numberOfHours <= 23) {
			
		if(numberOfHours >= 17 && numberOfHours <= 20 ){
			
			contentText = "Hi, is early evening";
			
		}else{
			
			contentText = "Hi, is at night";
		}
	}else {
		
		contentText = "Hi, unknown";
	}
	
	outPutText	= document.createTextNode(contentText);
	tdaBrand 	= document.querySelector('#tda-brand');
	tdaBrand.parentNode.insertBefore(outPutText, tdaBrand);
	tdaBrand.parentNode.style.color = "#000";
}

    // run this functions when the document is loaded	
	window.onload = function(){
		
		currentYear();
		partOfTheDay();
		jsIsAdded();
	}


