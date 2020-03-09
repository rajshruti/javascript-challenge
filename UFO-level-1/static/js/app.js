// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Append a table containing UFO sightings
tableData.forEach(function(sightings){
	
	// Add new rows of data for each UFO sighting
    var row = tbody.append("tr");

    // Add new columns for each row/sighting 
    Object.entries(sightings).forEach(function([key, value]) {
      var col = row.append("td");
      col.text(value);
    });
});

// Display UFO sightings based on the date entered by the user
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Store the date entered by user in a variable
    var userInput = d3.select("#datetime").property("value");
	
    // Filter data as requested by the user
    var requestedData = tableData.filter(sightings => sightings.datetime === userInput);


    requestedData.forEach(function(sightings) {
		
    // Add new rows of data for each UFO sighting
    var row = tbody.append("tr");
	
    // Add new columns for each row/sighting 
    Object.entries(sightings).forEach(function([key, value]) {
      var col = row.append("td");
      col.text(value);
    });
});
});