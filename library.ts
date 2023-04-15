

const toTitleCase = function(text: string){
    let words = text.split(" ");
    console.log(words)
    words = words.map(word => word.toUpperCase())
    console.log(words)
    let newWords = []
    for (const word of words){
        const newWord = word[0] + word.slice(1).toLowerCase()
        newWords.push(newWord)
    }
    console.log(newWords)
}

toTitleCase("wojna I pokój")


// "wojna I pokój"
// "Buszujący w Zbożu"
// "zABIĆ dROZDA"