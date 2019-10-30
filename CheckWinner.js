//Samlingsfunktion för vinnar algoritmerna.
function winCondition(column, row, boardSize, array, player) {
    if (vertical(column, boardSize, array, player)) {
        return true;
    } else if (horizontal(row, boardSize, array, player)){
        return true;
    } else if (diagonalSlope(row, column, array, player, boardSize)){
        return true;
    } else if (diagonalHill(row, column, array, player, boardSize)){
        return true;
    } else return false;
}

//Funktionen tar kolumnkoordinaten från den senaste turen och kollar hela raden efter 5 i rad. För varje lika markör på raken ökar "inARowCount" variabeln.
function vertical(column, boardSize, array, player) {
    let inARowCount = 0;
    for (let i = 0; i < boardSize; i++){
        if (array[i][column] === player){
            inARowCount++;
            if (inARowCount === 5){
                return true;
            }

        } else inARowCount = 0;
    }
    return false;
}

//Samma som ovan fast horisontellt.
function horizontal(row, boardSize, array, player) {
    let inARowCount = 0;
    for (let i = 0; i < boardSize; i++){
        if (array[row][i] === player){
            inARowCount++;
            if (inARowCount === 5){
                return true;
            }

        } else inARowCount = 0;
    }
    return false;
}

//Funktionen kollar diagonalen som är en nedförsbacke. Tar koordinaten från den senaste turen, och tittar på de 4 positionerna åt nordväst och sydöst.
function diagonalSlope(row, column, array, player, boardSize) {
    let inARowCount = 0;
    for (let i = 0; i < 5; i++){
        let currentPositionRow = parseInt(row, 10) - i;
        let currentPositionColumn = parseInt(column, 10) - i;
        if (currentPositionRow >= 0 && currentPositionColumn >= 0) {
            if (array[currentPositionRow][currentPositionColumn] === player){
                inARowCount++;
            } else break;
        }
    }
    for (let y = 0; y < 5; y++){
        let currentPositionRow = parseInt(row, 10) + y;
        let currentPositionColumn = parseInt(column, 10) + y;
        if (currentPositionRow < boardSize && currentPositionColumn < boardSize){
            if (array[currentPositionRow][currentPositionColumn] === player){
                inARowCount++;
            } else break;
        }
    }
    if (inARowCount > 5){
        return true;
    }
    return false;

}

//Samma som ovan men kollar diagonalen som är en uppförsbacke.
function diagonalHill(row, column, array, player, boardSize) {
    let inARowCount = 0;
    for (let i = 0; i < 5; i++){
        let currentPositionRow = parseInt(row, 10) + i;
        let currentPositionColumn = parseInt(column, 10) - i;
        if (currentPositionRow < boardSize && currentPositionColumn >= 0) {
            if (array[currentPositionRow][currentPositionColumn] === player){
                inARowCount++;
            } else break;
        }
    }
    for (let y = 0; y < 5; y++){
        let currentPositionRow = parseInt(row, 10) - y;
        let currentPositionColumn = parseInt(column, 10) + y;
        if (currentPositionRow >= 0 && currentPositionColumn < boardSize) {
            if (array[currentPositionRow][currentPositionColumn] === player){
                inARowCount++;
            } else break;
        }
    }
    if (inARowCount > 5){
        return true;
    }
    return false;

}