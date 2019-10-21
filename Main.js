let board = document.querySelector("#board");
const gridHeight = 25;
const gridLength = 25;
const playerX = "<img src='Cross.JPG' height='25' width='25'>";
const playerO = "<img src='Circle.PNG' height='25' width='25'>";

let gridArray = createGridArray (gridHeight, gridLength);
createGrid (gridHeight, gridLength, board);

let numberOfTurns = document.querySelector(".count");
numberOfTurns.textContent = 1;

let playAgainButton = document.querySelector("#playAgain");

let player = "x";

board.addEventListener("click", function(event) {
    if (event.target.className === "column"){
        if (player === "x"){
            let row = event.target.parentElement.id;
            let column = event.target.id;
            addToArray(row, column, gridArray, player);
            event.target.innerHTML = playerX;
            player = "o";
            numberOfTurns.textContent++;
            event.target.disabled = true;
            document.querySelector(".player1Plate").style.border = "3px solid rgb(255, 255, 255)";
            document.querySelector(".player2Plate").style.border = "5px solid lightgreen";
            
            if (winCondition(column, row, gridHeight, gridLength, gridArray, "x")){
                document.querySelector(".player1Win").style.visibility = "visible";
                document.querySelector(".crossWin").style.visibility = "visible";
                document.querySelector(".player2Plate").style.border = "3px solid rgb(255, 255, 255)";
                disableGridButtons(gridHeight, gridLength);
                document.querySelector(".playAgainButton").style.visibility = "visible";
                playAgain(playAgainButton);
            }
        } 
        
        else {
            let row = event.target.parentElement.id;
            let column = event.target.id;
            addToArray(row, column, gridArray, "o");
            event.target.innerHTML = playerO;
            player = "x";
            numberOfTurns.textContent++;
            event.target.disabled = true;
            document.querySelector(".player1Plate").style.border = "5px solid lightgreen";
            document.querySelector(".player2Plate").style.border = "3px solid rgb(255, 255, 255)";

            if (winCondition(column, row, gridHeight, gridLength, gridArray, "o")){
                document.querySelector(".player2Win").style.visibility = "visible";
                document.querySelector(".circleWin").style.visibility = "visible";
                document.querySelector(".player1Plate").style.border = "3px solid rgb(255, 255, 255)";
                disableGridButtons(gridHeight, gridLength)
                document.querySelector(".playAgainButton").style.visibility = "visible";
                playAgain(playAgainButton);
            }
        }
    }
})