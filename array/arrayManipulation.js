

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the arrayManipulation function below.
function getMax(array) {
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        max = Math.max(max, sum);
    }
    return max;
}

function arrayManipulation(n, queries) {
    let outputArray = new Array(n + 2);
    outputArray.fill(0);
    for (let i = 0; i < queries.length; i++) {
        let query = queries[i];
        let a = query[0];
        let b = query[1];
        let k = query[2];
        outputArray[a] += k;
        outputArray[b + 1] -= k;
    }
    let max = getMax(outputArray);
    return max;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
