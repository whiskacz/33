function snippet(text, length) {
    if (text.length < length) {
        return text;
    }
    else {
        var wielokropek = "...";
        console.log(wielokropek);
        console.log(text);
        var newText = text.slice(0, length - wielokropek.length);
        console.log(newText);
        var lastSpace = newText.lastIndexOf("");
        newText = "".concat(newText.slice(0, lastSpace)).concat(wielokropek);
        return newText;
    }
}
var call1 = snippet("W wyjątkowym wydaniu Stanu Wyjątkowego komentatorzy Onetu i Newsweeka analizowali wszystkie wojny wewnętrzne w Zjednoczonej Prawicy, które — choć osłabiony Kaczyński apeluje o przedwyborcze zawieszenie broni — wybuchnęły z nową siłą. W specjalnym wydaniu politycznego słuchowiska Andrzej Stankiewicz, Dominika Długosz, Renata Grochal i Kamil Dziubka przyglądają się prezesowi PiS, który podupadł na zdrowiu po operacji kolana.", 20);
console.log(call1);
var call2 = snippet("W wyjątkowym wydaniu Stanu Wyjątkowego komentatorzy Onetu i Newsweeka analizowali wszystkie wojny wewnętrzne w Zjednoczonej Prawicy, które — choć osłabiony Kaczyński apeluje o przedwyborcze zawieszenie broni — wybuchnęły z nową siłą. W specjalnym wydaniu politycznego słuchowiska Andrzej Stankiewicz, Dominika Długosz, Renata Grochal i Kamil Dziubka przyglądają się prezesowi PiS, który podupadł na zdrowiu po operacji kolana.");
console.log(call2);
var call3 = snippet(false, 20);
console.log(call3);
var call4 = snippet("W wyjątkowym wydaniu Stanu Wyjątkowego komentatorzy Onetu i Newsweeka analizowali wszystkie wojny wewnętrzne w Zjednoczonej Prawicy, które — choć osłabiony Kaczyński apeluje o przedwyborcze zawieszenie broni — wybuchnęły z nową siłą. W specjalnym wydaniu politycznego słuchowiska Andrzej Stankiewicz, Dominika Długosz, Renata Grochal i Kamil Dziubka przyglądają się prezesowi PiS, który podupadł na zdrowiu po operacji kolana.", false);
console.log(call4);
var call5 = snippet("W wyjątkowym wydaniu Stanu Wyjątkowego komentatorzy Onetu i Newsweeka analizowali wszystkie wojny wewnętrzne w Zjednoczonej Prawicy, które — choć osłabiony Kaczyński apeluje o przedwyborcze zawieszenie broni — wybuchnęły z nową siłą. W specjalnym wydaniu politycznego słuchowiska Andrzej Stankiewicz, Dominika Długosz, Renata Grochal i Kamil Dziubka przyglądają się prezesowi PiS, który podupadł na zdrowiu po operacji kolana.", 20);
console.log(call5);
