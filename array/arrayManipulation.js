

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
function arrayManipulation(n, queries) {
    var outputArray = [];
    var arrayResults = outputArray[n + 2];
    for (let i = 0; i < queries.length; i++) {
        var a = queries[i][0];
        var b = queries[i][1];
        var k = queries[i][2];
        arrayResults[a] += k;
        arrayResults[b + 1] -= k;
    }
    var max = getMax(arrayResults);
    return max;


}

function getMax(Arr) {
    var max = Arr.MIN_VALUE;
    var sum = 0;
    for (let i = 0; i < Arr.length; i++) {
        sum += Arr[i];
        max = Math.max(max, sum);
    }
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
