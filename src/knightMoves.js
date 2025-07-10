import { possibleMoves, checkMatch, checkIncludes } from "./utility.js";

export function knightMoves(start, finish) {
    let q = [[start]];
    let vis = [start];

    while (q.length > 0) {
        const current = q.shift();
        if (checkMatch(current, finish)) {
            return current;
        }
        const moves = possibleMoves(current);

    }
}