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
    console.log(dateInput);

    var cityInput = d3.select("#city").property("value");
    console.log(cityInput);

    // var stateInput = d3.select("#state").property("value");
    // console.log(stateInput);

    // var countryInput = d3.select("#country").property("value");
    // console.log(countryInput);

    // var shapeInput = d3.select("#shape").property("value");
    // console.log(shapeInput);

    var filteredByDate = tableData.filter(sighting =>
        sighting.datetime.toLowerCase().includes(dateInput.toLowerCase()));

    var filteredByCity = tableData.filter(sighting =>
        sighting.city.toLowerCase().includes(cityInput.toLowerCase()));

    // var filteredByState = tableData.filter(sighting =>
    //     sighting.state.toLowerCase().includes(stateInput.toLowerCase()));

    // var filteredByCountry = tableData.filter(sighting =>
    //     sighting.country.toLowerCase().includes(countryInput.toLowerCase()));

    // var filteredByShape = tableData.filter(sighting =>
    //     sighting.shape.toLowerCase().includes(shapeInput.toLowerCase()));

    filteredByDate.forEach((sighting) => {
        var row = d3.select("tbody").append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
    filteredByCity.forEach((sighting) => {
        var row = d3.select("tbody").append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    // filteredByState.forEach((sighting) => {
    //     var row = d3.select("tbody").append("tr");
    //     Object.entries(sighting).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });

    // filteredByCountry.forEach((sighting) => {
    //     var row = d3.select("tbody").append("tr");
    //     Object.entries(sighting).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });

    // filteredByShape.forEach((sighting) => {
    //     var row = d3.select("tbody").append("tr");
    //     Object.entries(sighting).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });

});



