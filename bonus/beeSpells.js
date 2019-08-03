function spellingBeeSolutions(wordlist, puzzles) {
    let wordArr = [];

    for (let i = 0; i < puzzles.length; i++) {
        wordArr.push();
    }

    for (let i = 0; i < puzzles.length; i++) {
        for (let i = 0; i < wordlist.length; i++){
            if (letterChecker(puzzles[i], wordlist[i])) {
                wordArr[i]++;
            }
        }
    }
    return wordArr;
        
}

function letterChecker(word1, word2) {
    let inside = true;
    let wordCount = 0;
    let wordHash = {};

    for (let i = 0; i < word2.length; i++) {
        if (wordHash[word2[i]]) {
            wordHash[word2[i]]++;
        } else {
            wordHash[word2[i]] = 1;
        }
    }

    for (let i = 0; i < word2.length; i++) {
        if (!word2.includes(word1[i])) {
            return false;
        }

        if (word1.includes(word2[i])) {
            for (key in wordHash) {
                if (key === word2[i]) {
                    wordCount += wordHash[key];
                }
            }

            if (wordCount === word2.length) {
                return inside;
            }
        } else {
            inside = false;
            break;
        }
    }
    return inside;

}