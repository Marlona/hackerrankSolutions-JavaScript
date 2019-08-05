'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    console.log(sort(q))

    function sort(items) {
        let bribes = 0;

        for (let i = 0; i < items.length; i++) {
            if (items[i] - (i + 1) > 2) {
                return "Too chaotic";
            } 
            for (let j = items[i] - 2; j < i; j++) {
                if (items[j] > items[i]) {
                    bribes++
                } 
            }
        }
        return bribes;
    }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
