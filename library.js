var toTitleCase = function (text) {
    var words = text.split(" ");
    console.log(words);
    words = words.map(function (word) { return word.toUpperCase(); });
    console.log(words);
    var newWords = words.forEach(function (word) { return word.slice(1).toLowerCase; });
    console.log(newWords);
};
toTitleCase("wojna I pokój");
// "wojna I pokój"
// "Buszujący w Zbożu"
// "zABIĆ dROZDA"
