export function possibleMoves(start) {
    let moves = [[start[0]-1, start[1]+2], [start[0]+1, start[1]+2],
                [start[0]+2, start[1]+1], [start[0]+2, start[1]-1],
                [start[0]+1, start[1]-2], [start[0]-1, start[1]-2],
                [start[0]-2, start[1]-1], [start[0]-2, start[1]+1]];
    moves = moves.filter((move) => move[0] >= 0 && move[1] >=0)
    return moves;
}

export function checkMatch(arr1, arr2) {
    return arr1[0] === arr2[0] && arr1[1] === arr2[1];
}

export function checkIncludes(pos, arr) {
    for (const pair of arr) {
        if (checkMatch(pos, pair)) return true;
    };

    return false;
}