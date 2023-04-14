function snippet (text:string, length: number) : string {
    if (text.length <length){
        return text;
    }
    else {
        const wielokropek: string = "..."
        console.log(wielokropek)
        console.log(text)
        let newText = text.slice(0, length - wielokropek.length);
        console.log(newText)
        const lastSpace = newText.lastIndexOf("");
        newText = `${newText.slice(0, lastSpace)}${wielokropek}`;
        return newText
    }
}

const call1 = snippet("W wyjątkowym wydaniu Stanu Wyjątkowego komentatorzy Onetu i Newsweeka analizowali wszystkie wojny wewnętrzne w Zjednoczonej Prawicy, które — choć osłabiony Kaczyński apeluje o przedwyborcze zawieszenie broni — wybuchnęły z nową siłą. W specjalnym wydaniu politycznego słuchowiska Andrzej Stankiewicz, Dominika Długosz, Renata Grochal i Kamil Dziubka przyglądają się prezesowi PiS, który podupadł na zdrowiu po operacji kolana.", 20)
console.log(call1)

