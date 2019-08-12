abbrTweet = function (str) {
    // var Acronyms = {};
    var splitString = str.trim().split(" ")
    if (splitString.length > 1) {
        return (splitString[0].charAt(0) + splitString[1].charAt(0) + splitString[2].charAt(0) +  " " + splitString[3])
    }
    return splitString[1];
} 

console.log(abbrTweet("Be Right Back Mom"))

var abbrev = 'Be Right Back'.match(/\b([A-Z])/g).join('');
console.log(abbrev)

var find = /[a-z]{4,}/gi;

function replace(match) {
    return match[0] + (match.length -2 ) + match[match.length - 1];
}

function abbr(string) {
    return string.replace(find, replace);
}

console.log(abbr("elephant ride"))

function abbr(string) {
    return string.replace(/\w{4,}/g, 
        function(word) {
        return word[0] + (word.length -2) + word.slice(-1)
    })
}

console.log(abbr("elephant ride"))

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));


function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log(reverseString("hello"));

//Recursion version
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}
console.log(reverseString("hello"));