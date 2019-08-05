'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
let swapCounter = 0
let length = arr.length
const arr2 = [...arr]

arr2.sort((a, b) => {
    if (a > b) return 1
    else if (a < b) return -1
    return 0
})

const map = arr.reduce((acc, current, i) => {
    acc[current] = i
    return acc
}, {})

for (let i = 0; i < length; i++) {
    const position1 = arr[i]
    const position2 = arr2[i]
    if (position2 !== position1) {
        swapCounter++
        const index = map[position2]
        arr[index] = position1
        arr[i] = position2
        map[position1] = index
    }

}
return swapCounter
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
