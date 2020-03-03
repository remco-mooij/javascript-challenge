// from data.js
var tableData = data;

// YOUR CODE HERE!
table = {}

var cities = tableData.map((sighting) => {
    return sighting.city;
});
console.log("Cities: ", cities); 



var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.selectAll("tbody>tr").remove();

    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#city").property("value");
    var stateInput = d3.select("#state").property("value");
    var countryInput = d3.select("#country").property("value");
    var shapeInput = d3.select("#shape").property("value");

    var filteredDate = tableData.filter(sighting => sighting.datetime === dateInput);
    var filteredCity = tableData.filter(sighting => sighting.city === cityInput);
    var filteredState = tableData.filter(sighting => sighting.state === stateInput);
    var filteredCountry = tableData.filter(sighting => sighting.country === countryInput);
    var filteredShape = tableData.filter(sighting => sighting.shape === shapeInput);

    filteredDate.forEach((sighting) => {
        var row = d3.select("tbody").append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredCity.forEach((sighting) => {
        var row = d3.select("tbody").append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredState.forEach((sighting) => {
        var row = d3.select("tbody").append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredCountry.forEach((sighting) => {
        var row = d3.select("tbody").append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredShape.forEach((sighting) => {
        var row = d3.select("tbody").append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
});



