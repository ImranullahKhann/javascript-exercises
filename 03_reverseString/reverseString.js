const reverseString = function(word) {
    wordLength = word.length;
    let reverse = "";
    for (let i = 1; i <= wordLength; i++)
    {
        reverse += word.charAt(wordLength - i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
