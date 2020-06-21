// from data.js
let tableData = data;
let tbody = d3.select("tbody");
// console.log(tableData);
// YOUR CODE HERE!

//Bring data in from data.js and display in table on page
tableData.forEach(function(ufoReport) {
  console.log(ufoReport);
  let row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    let cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form-id");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Delete table on page
  d3.selectAll('td').remove();

  // Select the input element and get the raw HTML node 
  let inputButton = d3.select("#datetime");
  
  // Get the value property of the input element
  let inputValue = inputButton.property("value");
  
  // Print the value to the console
  console.log(inputValue);

  //Get input values for the various forms
  let filteredDate = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredDate);

  filteredDate.forEach(function(filterDate) {
    let row = tbody.append("tr");
    Object.entries(filterDate).forEach(function([key, value]) {
      console.log(key, value);
      let cell = row.append("td");
      cell.text(value);
    });
  });
}
