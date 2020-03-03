// from data.js
var tableData = data;

// YOUR CODE HERE!
table = {}

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.selectAll("tbody>tr").remove();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    filteredData.forEach((sighting) => {
        var row = d3.select("tbody").append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
});



