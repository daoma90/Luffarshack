function createGrid(gridHeight, gridLength, grid) {
    for (let i = 0; i < gridHeight; i++){
        let rows = document.createElement("div");
        rows.className = "row";
        rows.id = i;
        grid.appendChild(rows);
        for (let y = 0; y < gridLength; y++){
            let button = document.createElement("button");
            button.className = "column";
            button.id = y;
            rows.appendChild(button);
            }
        }
  }
  
function createGridArray(gridHeight, gridLength) {
    let gridArray = [];
    for (let i = 0; i < gridHeight; i++){
      gridArray[i] = [];
      for (let y = 0; y < gridLength; y++){
        gridArray[i][y] = "";
      }
    }
    return gridArray;
  }

function addToArray(row, column, array, player){
    array[row][column] = player;
}

function disableGridButtons(gridHeight, gridLength) {
    let totalButtons = gridHeight * gridLength;
    let buttons = document.querySelectorAll(".column");
    for (let i = 0; i < totalButtons; i++){
        buttons[i].disabled = true;
    }
}

function player1Wins(){
    document.querySelector(".player1Win").style.visibility = "visible";
    document.querySelector(".crossWin").style.visibility = "visible";
    document.querySelector(".player2Plate").style.border = "3px solid rgb(255, 255, 255)";
}

function player2Wins(){
    document.querySelector(".player2Win").style.visibility = "visible";
    document.querySelector(".circleWin").style.visibility = "visible";
    document.querySelector(".player1Plate").style.border = "3px solid rgb(255, 255, 255)";
}

function playAgain (button){
    document.querySelector(".playAgainButton").style.visibility = "visible";
    button.addEventListener("click", function(event){
        window.location.reload();
    })
}