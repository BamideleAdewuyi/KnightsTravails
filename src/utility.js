export function possibleMoves(start) {
    let moves = [[start[0]-1, start[1]+2], [start[0]+1, start[1]+2],
                        [start[0]+2, start[1]+1], [start[0]+2, start[1]-1],
                        [start[0]+1, start[1]-2], [start[0]-1, start[1]-2],
                        [start[0]-2, start[1]-1], [start[0]-2, start[1]+1]];
    moves = moves.filter((move) => move[0] >= 0 && move[1] >=0)
    return moves;
}