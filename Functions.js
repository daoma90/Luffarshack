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

function winCondition(column, row, gridHeight, gridLength, array, player) {
    if (vertical(column, gridHeight, array, player)) {
        return true;
    } else if (horizontal(row, gridLength, array, player)){
        return true;
    } else if (diagonalSlope(row, column, array, player)){
        return true;
    } else return false;
}

function vertical(column, gridHeight, array, player) {
    let inARowCount = 0;
    for (let i = 0; i < gridHeight; i++){
        if (array[i][column] === player){
            inARowCount++;
            if (inARowCount === 5){
                return true;
            }

        } else inARowCount = 0;
    }
    return false;
}

function horizontal(row, gridLength, array, player) {
    let inARowCount = 0;
    for (let i = 0; i < gridLength; i++){
        if (array[row][i] === player){
            inARowCount++;
            if (inARowCount === 5){
                return true;
            }

        } else inARowCount = 0;
    }
    return false;
}

function diagonalSlope(row, column, array, gridLength, player) {
    let startPositionRow = row - column; 
    let startPositionCol = column - column;
    let loops = gridLength - Math.abs(row - column);
    let inARowCount = 0;
    for (let i = startPositionCol; i < loops; i++){
        if (array[startPositionRow][i] === player){
            inARowCount++;
            if (inARowCount === 5){
                return true;
            }
        } else inARowCount = 0;
        startPositionRow++
    }
    return false;

}

function diagonalHill(row, column, array, player) {
   
}

function disableGridButtons(gridHeight, gridLength) {
    let totalButtons = gridHeight * gridLength;
    let buttons = document.querySelectorAll(".column");
    for (let i = 0; i < totalButtons; i++){
        buttons[i].disabled = true;
    }
}

function playAgain (button){
    button.addEventListener("click", function(event){
        window.location.reload();
    })
}