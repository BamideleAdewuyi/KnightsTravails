class Traverse {
    constructor(start, finish) {
        this.start = start;
        this.finish = finish;
    };

    removeItem(arr, value) {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    };

    checkIncludes(pair, array) {

    };

    possibleMoves(node) {
        let possibilities = [[node[0]-1, node[1]+2], [node[0]+1, node[1]+2],
                            [node[0]+2, node[1]+1], [node[0]+2, node[1]-1],
                            [node[0]+1, node[1]-2], [node[0]-1, node[1]-2],
                            [node[0]-2, node[1]-1], [node[0]-2, node[1]+1]];
        for (let i = possibilities.length-1; i >= 0; i--) {
            if (possibilities[i][0] < 0 || possibilities[i][1] < 0) {
                this.removeItem(possibilities, possibilities[i])
            }
        };
        return possibilities;
    };

    calculate(node = this.start) {
        let q = [node];
        let vis = [node, [1, 2]];
        let neighbours = this.possibleMoves(node)
        console.log(neighbours)
        for (const neighbour of neighbours) {
            console.log(vis.includes(neighbour))
        }
    };
};

export default Traverse;