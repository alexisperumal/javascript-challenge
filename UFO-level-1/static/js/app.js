// from data.js
var tableData = data;


// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");  // Reference to tdata html tag (table data)
var button = d3.select("#filter-btn");  // Button reference
var inputField = d3.select("#datetime");

// document.getElementById("datetime").addEventListener('submit', function(event){
//     event.preventDefault();
// });

inputField.on('submit', function(event) {
    event.preventDefault();
})

inputField.submit(function(event) {
    event.preventDefault();
})



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

// You can also define the click handler inline
button.on("click", function() {
    // console.log("Hi, a button was clicked!");
    // console.log(inputField);
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

create_table_body(tableData);

