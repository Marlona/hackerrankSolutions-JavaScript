abbrTweet = function (str) {
    // var Acronyms = {};
    var splitString = str.trim().split(" ")
    if (splitString.length > 1) {
        return (splitString[0].charAt(0) + splitString[1].charAt(0) + splitString[2].charAt(0) +  " " + splitString[3])
    }
    return splitString[1];
}

console.log(abbrTweet("Be Right Back Mom"))