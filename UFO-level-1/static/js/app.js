// from data.js
var tableData = data;


// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");  // Reference to tdata html tag (table data)
var button = d3.select("#filter-btn");  // Button reference
var inputField = d3.select("#datetime");
var form = d3.select("form");

// form.on('submit', function() {
//     d3.event.preventDefault();
// })

// You can also define the click handler inline
form.on("submit", function() {
    d3.event.preventDefault();
    filter_date = inputField.property("value");
    let date_str = inputField.property("value").toString();
    if (date_str.length == 0) {
        clear_table()
        create_table_body(tableData);
    } else {
        // console.log(`Filter by date ${date_str}.`)
        var filteredData = tableData.filter(sighting => sighting.datetime === filter_date);
        // console.log(filteredData);
        clear_table();
        create_table_body(filteredData);
    }
  });



function create_table_body(data) {
    // tbody.remove()
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}

function clear_table() {
    let myTable = document.getElementById('ufo_table_body')
    let rowCount = myTable.rows.length;
    while(rowCount--) myTable.deleteRow(rowCount); 
}



create_table_body(tableData);

