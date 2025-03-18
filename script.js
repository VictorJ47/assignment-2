// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid"); //get the table we're operating on
    let newRow = document.createElement("tr"); //create a new row
    //if table.rows[0] exists, newCols = table.rows[0].cells.length 
    //otherwise, newCols = 1
    //in english: if there's at least one row, make the number of cols =
    //to the length of the first, otherwise make it equal to 1
    let newCols = table.rows[0] ? table.rows[0].cells.length : 1;

    //creating cols, or "table data"m (td)
    for(let i = 0; i < newCols; i++){
        let newCell = document.createElement("td");
        //newCell.onclick = function() {colorCell(this); };
        newRow.appendChild(newCell); //add this cell to the new row
        //basically, row is a list and your adding new cells
        //representing columns
    }
    //now we've constructed the new row by creating a new
    //tr element, then filling it with new td elements
    //we can now append this to our already existing table
    table.appendChild(newRow); 

}

// Add a column
function addC() {
    let table = document.getElementById("grid")
    //in case table's empty, create a row to add to
    if(table.rows.length === 0){
        addR();
    }
    else {
        //for each row in rows, we append a new cell (td)
        for(let row of table.rows) {
            let newCell = document.createElement("td");
            //newCell.onclick = function() {colorCell(this); };
            row.appendChild(newCell)
        }
    }


}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}