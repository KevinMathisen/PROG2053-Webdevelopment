

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
