// from data.js
var tableData = data;

// YOUR CODE HERE!
table = {}

var cities = tableData.map((sighting) => {
    return sighting.city;
});
console.log("Cities: ", cities); 

data.forEach((sighting) => {
    var row = d3.select("tbody").append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});