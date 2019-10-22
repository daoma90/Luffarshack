function winCondition(column, row, gridHeight, gridLength, array, player) {
    if (vertical(column, gridHeight, array, player)) {
        return true;
    } else if (horizontal(row, gridLength, array, player)){
        return true;
    } else if (diagonalSlope(row, column, array, player)){
        return true;
    } else if (diagonalHill(row, column, array, player)){
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

function diagonalSlope(row, column, array, player) {
    let inARowCount = 0;
    for (let i = 0; i < 5; i++){
        let currentPositionRow = parseInt(row, 10) - i;
        let currentPositionColumn = parseInt(column, 10) - i;
        if (array[currentPositionRow][currentPositionColumn] === player){
            inARowCount++;
        } else break;
    }
    for (let y = 0; y < 5; y++){
        let currentPositionRow = parseInt(row, 10) + y;
        let currentPositionColumn = parseInt(column, 10) + y;
        if (array[currentPositionRow][currentPositionColumn] === player){
            inARowCount++;
        } else break;
    }
    if (inARowCount > 5){
        return true;
    }
    return false;

}

function diagonalHill(row, column, array, player) {
    let inARowCount = 0;
    for (let i = 0; i < 5; i++){
        let currentPositionRow = parseInt(row, 10) + i;
        let currentPositionColumn = parseInt(column, 10) - i;
        if (array[currentPositionRow][currentPositionColumn] === player){
            inARowCount++;
        } else break;
    }
    for (let y = 0; y < 5; y++){
        let currentPositionRow = parseInt(row, 10) - y;
        let currentPositionColumn = parseInt(column, 10) + y;
        if (array[currentPositionRow][currentPositionColumn] === player){
            inARowCount++;
        } else break;
    }
    if (inARowCount > 5){
        return true;
    }
    return false;

}