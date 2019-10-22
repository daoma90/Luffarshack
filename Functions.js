//Bestämmer storleken på knapparna, för att hela brädet ska synas samtidigt, även vid 100x100 knappar.
function gridSize(boardSize){
    if (boardSize >= 30 && boardSize <= 39){
        return "20px";
    } else if (boardSize >= 40 && boardSize <= 49){
        return "16px";
    } else if (boardSize >= 50 && boardSize <= 59){
        return "13px";
    } else if (boardSize >= 60 && boardSize <= 69){
        return "11px";
    } else if (boardSize >= 70 && boardSize <= 79){
        return "10px";
    } else if (boardSize >= 80 && boardSize <= 89){
        return "9px";
    } else if (boardSize >= 90 && boardSize <= 100){
        return "8px";
    }
}

//Bestämmer storleken på spelarnas markörer på brädet.
function playerMarkerSize(boardSize){
    if (boardSize >= 30 && boardSize <= 39){
        return 16;
    } else if (boardSize >= 40 && boardSize <= 49){
        return 12;
    } else if (boardSize >= 50 && boardSize <= 59){
        return 10;
    } else if (boardSize >= 60 && boardSize <= 69){
        return 8;
    } else if (boardSize >= 70 && boardSize <= 79){
        return 6;
    } else if (boardSize >= 80 && boardSize <= 89){
        return 5;
    } else if (boardSize >= 90 && boardSize <= 100){
        return 5;
    } else return 25;
}

//Skapar knapparna i HTML.
function createGrid(boardSize, grid) {
    let buttonSize = gridSize(boardSize);
    for (let i = 0; i < boardSize; i++){
        let rows = document.createElement("div");
        rows.className = "row";
        rows.id = i;
        grid.appendChild(rows);
        for (let y = 0; y < boardSize; y++){
            let button = document.createElement("button");
            button.className = "column";
            button.id = y;
            button.style.width = buttonSize;
            button.style.height = buttonSize;
            rows.appendChild(button);
            }
    }
}

//Skapar arrayen som speglar knapparna. Här sparas datan från rundorna.
function createGridArray(boardSize) {
    let gridArray = [];
    for (let i = 0; i < boardSize; i++){
      gridArray[i] = [];
      for (let y = 0; y < boardSize; y++){
        gridArray[i][y] = "";
      }
    }
    return gridArray;
  }

//Lägger till datan från rundan i arrayen.
function addToArray(row, column, array, player){
    array[row][column] = player;
}

//Avaktiverar alla knappar, detta sker när en spelare vinner.
function disableGridButtons(boardSize) {
    let totalButtons = boardSize * boardSize;
    let buttons = document.querySelectorAll(".column");
    for (let i = 0; i < totalButtons; i++){
        buttons[i].disabled = true;
    }
}

//Ändrar spelarnas rutor när någon vunnit. För att annonsera vinnaren.
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

//"Play again" knappen dyker upp när någon vunnit. Den refreshar browsern.
function playAgain (button){
    document.querySelector(".playAgainButton").style.visibility = "visible";
    button.addEventListener("click", function(event){
        window.location.reload();
    })
}