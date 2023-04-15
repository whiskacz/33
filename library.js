var toTitleCase = function (text) {
    var words = text.split(" ");
    console.log(words);
    words = words.map(function (word) { return word.toUpperCase(); });
    console.log(words);
    var newWords = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var newWord = word[0] + word.slice(1).toLowerCase();
        newWords.push(newWord);
    }
    console.log(newWords);
};
toTitleCase("wojna I pokój");
// "wojna I pokój"
// "Buszujący w Zbożu"
// "zABIĆ dROZDA"
