//Spelarna kan välja storlek på brädet. Från 5x5 till 100x100.
let boardSize = prompt("Choose the length of the boards sides")
while (boardSize > 100 || boardSize < 5){
    boardSize = prompt("5/100 is the minimum/maximum length of the boards sides. Pick again!")
}

let board = document.querySelector("#board");
let playAgainButton = document.querySelector("#playAgain");

//Använder en funktion som bestämmer storleken på spelarnas markörer på brädet, beroende på hur stort brädet är.
let playerMarkerSizeX = playerMarkerSize(boardSize);
let playerMarkerSizeO = playerMarkerSize(boardSize);

//Spelarnas markörer.
let playerX = "<img src='Cross.JPG' height='" + playerMarkerSizeX + "' width='" + playerMarkerSizeX + "'>";
let playerO = "<img src='Circle.PNG' height='" + playerMarkerSizeO + "' width='" + playerMarkerSizeO + "'>";

//Skapar knapparna och arrayen som speglar knapparna.
let gridArray = createGridArray (boardSize);
createGrid (boardSize, board);

//Räknar rundor
let numberOfTurns = document.querySelector(".count");
numberOfTurns.textContent = 1;

//Denna kod bestämmer vems tur det är med hjälp av "player" variabeln.
let player = "x";
board.addEventListener("click", function(event) {
    if (event.target.className === "column"){
        if (player === "x"){
            let row = event.target.parentElement.id;
            let column = event.target.id;
            addToArray(row, column, gridArray, player);  //Knappens koordinater används för att uppdatera arrayen.
            event.target.innerHTML = playerX;            //Spelarens ikon läggs in i knappen.
            player = "o";
            numberOfTurns.textContent++;
            event.target.disabled = true;                //Avaktiverar knappen som blev tryckt.
            document.querySelector(".player1Plate").style.border = "3px solid rgb(255, 255, 255)";  //Ändrar nästa spelares ram till grön för att visa att det är nästa spelares tur.
            document.querySelector(".player2Plate").style.border = "5px solid lightgreen";
            
            //Kollar vem som vinner med funktioner som kollar arrayen efter 5 i rad.
            if (winCondition(column, row, boardSize, gridArray, "x")){
                player1Wins();                            //Om en spelare vinner visas detta i browsern genom att spelarrutan byts ut, med denna funktion.
                disableGridButtons(boardSize);            //Avaktiverar alla knappar.
                playAgain(playAgainButton);               //"Play again" knappen dyker upp.
            }
        } 
        //Samma som ovan, fast för spelare #2.
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

            if (winCondition(column, row, boardSize, gridArray, "o")){
                player2Wins();
                disableGridButtons(boardSize, boardSize)
                playAgain(playAgainButton);
            }
        }
    }
})