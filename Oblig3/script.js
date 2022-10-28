//The train object "const - litt usikker på om det skal være en 'const' her eller om det skal være 'var'"
const train{
	departStationEl: "Choose station",
	destStation: "Choose station",
	date: " ",
	departTime: " ",
	numTrav: "1"
};

console.log("halla");

//train.departStationEl

//Function to get the total travle price
//GetPrice(){

//}

//Function to get the date and time of travel
//GetDateAndTime(){

//}


//  Get all form elements.
let formEl = document.querySelector("form");
let departStationEl = document.querySelector("#departStation");
let destStationEl = document.querySelector("#destinationStation");
let dateEl = document.querySelector("#date");
let timeEl = document.querySelector("#time"); 
let numTravEl = document.querySelector("#numTravelers"); 
let submitInfoEl = document.querySelector("#submitInfo");

//  Create a date with current time.
let curDate = new Date();

//get the ticketList element
let elTicketList = document.getElementById('ticketsList'); 





//  Add submitForm as event handeler if the form is submitted.
formEl.addEventListener('submit', function(e) {
	submitForm(e);
});

//  Add eventlisteners which immediately inform the user if the input they entered is valid. 
departStationEl.addEventListener('blur', (e) => e.target.reportValidity());
destStationEl.addEventListener('blur', (e) => e.target.reportValidity());
dateEl.addEventListener('blur', (e) => e.target.reportValidity());
timeEl.addEventListener('blur', (e) => e.target.reportValidity());
numTravEl.addEventListener('blur', (e) => e.target.reportValidity());

//Add eventlistener for clicks in the ticketList element
elTicketList.addEventListener('click', deleteTicket); 







//  Function which checks if form has valid input 
//    and if so creates a new object and displays it on the page.
function submitForm(e) {
	//  Prevents the page from reloading.
	e.preventDefault();

	//  Get values from the form:
	let depStation = departStationEl.value;
	let destStation = destStationEl.value;
	let numTrav = numTravEl.value;
	//  Convert date and time input into a date object.
	let ticketDate = new Date(dateEl.value + " " + timeEl.value);

	console.log(depStation + " " + destStation);

	if (!e.target.reportValidity()) {			//  Informs user if form not valid:
		submitInfoEl.style.display = "inline";
		submitInfoEl.textContent = "Form is not valid!"; 
	} else if (depStation === destStation) {	//  Inform user if choosen same station twice:
		submitInfoEl.style.display = "inline";
		submitInfoEl.textContent = "You can't choose the same depart and destination station."; 
	} else if (ticketDate < curDate) {			//  Inform user if time choosen is invalid:
		submitInfoEl.style.display = "inline";
		submitInfoEl.textContent = "You have to choose date and time for a valid time window.";
	} else {									//  User input valid:
		
		//  Hides information about submit from user.
		submitInfoEl.style.display = "none";
		submitInfoEl.textContent = "";

		//  Create object using arguments
		//  Display object to page
	}
}



//Function that deletes tickets from a list. The function deletes only if the clicked element is "a" element and if that element's parent is a "li" element
function deleteTicket(e) {
	// Prevent the link from taking you elsewhere
	e.preventDefault(); 

	// If user clicked on an a element and if it's parent is a li element
	if (e.target.nodeName.toLowerCase() == "a" && e.target.parentNode.nodeName.toLowerCase() == "li") { 
		//Removing the element's parentnode, which is a li element, and deleting it
		e.target.parentNode.remove(); 
		
		//Remove the object if its in a list
	}

   } 

