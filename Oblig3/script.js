/*The train object set as a function so that the same object could be used multiple times as the variables gets 
  updated. This function object contains four parameters to make multiple specific objects.*/
function ticket(depStation, destStation, date, numTrav){	//Skal ikke funksjonsnavn alltid starte med små bokstaver?
	this.depStation = depStation;
	this.destStation = destStation;
	this.date = date;
	this.numTrav = numTrav;

	//Gets the total price of the ticet baced on the amount of passangers.
	this.getPrice = function() { return 100*this.numTrav;}
	//this.getPrice = function() { return 100*numTrav;}
}

//  Testing if script loaded:
console.log("halla"); //Skal vi ha denne?


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
let ulElement = document.querySelector("ul");



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


//  Creates array with tickets:
let tickets = [];
tickets.push(new Ticket("Oslo", "Bergen", new Date(2022, 9, 31, 12, 15, 0), 2));
tickets.push(new Ticket("Trondheim", "Gjøvik", new Date(2023, 1, 5, 15, 0, 0), 1));
tickets.push(new Ticket("Bergen", "Trondheim", new Date(2022, 11, 10, 10, 45, 0), 4));
//  Displays all hardcoded tickets:
for (const ticket of tickets) {
	displayTicket(ticket);
}


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
		let newTicket = new Ticket(depStation, destStation, ticketDate, numTrav);
		//  Save object to array
		tickets.push(newTicket);

		//  Display object to page
		displayTicket(newTicket);
	}
}



//Function that deletes tickets from a list. The function deletes only if the clicked element's grandparent is "button", and great grandparent is "li". 
function deleteTicket(e) {
	
	//If user clicked on an element with "button" as its grandparent, and "li" as its great grandparent. 
	//Due to using dlete icons, the clicked node would be "use" and parent node would be "svg", thus we look at the grandparent and great grandparent for the important elements
	//This is to make sure the clicked item in the list is the delete button and that it has a li element that we can remove.
	if (e.target.parentNode.parentNode.nodeName.toLowerCase() == "button" && e.target.parentNode.parentNode.parentNode.nodeName.toLowerCase() == "li") { 

		//Creating a confirmation dialog to confirm the user's actions to delete a ticket
		let confirmDeletingTicket = confirm(`Are you sure you want to delete the following ticket? 
		${e.target.parentNode.parentNode.previousSibling.nodeValue}`)

		//If the user confirmed the dialog
		if (confirmDeletingTicket) {
			//Removing the element's great grandparent, which is a li element, and deleting it
			e.target.parentNode.parentNode.parentNode.remove(); 
		}
	}
} 



//  Function that takes ticket object and displays it on the page
function displayTicket(ticket) {
	//  Creates a string which displays time and date of ticket:
	let dateString = `${ticket.date.getHours()}:${ticket.date.getMinutes()} ${ticket.date.getDate()}.${ticket.date.getMonth()+1}.${ticket.date.getFullYear()}`; 
	//  Create string which displays all information of ticket object provided:
	let string = `${ticket.depStation} til ${ticket.destStation} kl. ${dateString}, ${ticket.getPrice()}kr, ${ticket.numTrav} personer`; 
	//  Add the ticket information to ticketlist on site, and add a button to delete entry if wanted.  
	ulElement.innerHTML += `
	<li>${string} 
		<button id="deleteButton">
			<svg height ="20px" width ="20px">
				<use xlink:href="#delete-icon"/>
			</svg>
		</button>
	</li>`;
}

