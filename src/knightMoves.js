import { possibleMoves, checkMatch, checkIncludes } from "./utility.js";

export function knightMoves(start, finish) {
    let q = [[start]];
    let vis = [start];

    while (q.length > 0) {
        const current = q.shift();
        if (checkMatch(current[current.length-1], finish)) {
            return current;
        }
        const moves = possibleMoves(current[current.length-1]);
        for (const move of moves) {
            if (!checkIncludes(move, vis)) {
                let path = current.slice()
                path.push(move)
                q.push(path);
                vis.push(move);
            }
        }
    }
}