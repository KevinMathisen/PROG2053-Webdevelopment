# Examples of how we applied guidlines for styling javascript code to oblig3:
Guidelines from [Javascript code style guide](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

### Array creation
let tickets = [];

### Item addition
`tickets.push(new Ticket("Oslo", "Bergen", new Date(2022, 9, 31, 12, 15, 0), 2));`

### Comments with intention, and single line comments:
```
//  Implementation of task II.2
//  Function which checks if form has valid input 
//    and if so creates a new object and displays it on the page.
```

### Function names and declarations
`function displayTicket(ticket) {...}`

### Using for...of
`for (const ticket of tickets) {...}`

### Object names
`function Ticket(...) {...}`

### Conditional operators 
`(ticket.numTrav===1)?'person':'personer'`

### Strict equality operator
`else if (depStation === destStation) { ... }`

### Shortcut for boolean tests
`if (confirmDeletingTicket) { ... }'`

### Template literals
`let dateString = '${ticket.date.getHours()}:${ticket.date.getMinutes()} ${ticket.date.getDate()}.${ticket.date.getMonth()+1}.${ticket.date.getFullYear()}'`
