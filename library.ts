

const toTitleCase = function(text: string){
    let words = text.split(" ");
    console.log(words)
    words = words.map(word => word.toUpperCase())
    console.log(words)
    const newWords: string[] = words.forEach(word => word.slice(1).toLowerCase)
    console.log(newWords)
}

toTitleCase("wojna I pokój")


// "wojna I pokój"
// "Buszujący w Zbożu"
// "zABIĆ dROZDA"