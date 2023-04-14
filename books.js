function showBook(book) {
    if (book.readed) {
        console.log("Autorem przeczytanej ksi\u0105\u017Cki ".concat(book.title, " jest ").concat(book.author));
    }
    else {
        console.log("Autorem nieprzeczytanej ksi\u0105\u017Cki ".concat(book.title, " jest ").concat(book.author));
    }
}
function setPages(book, numberOfPages) {
    book.numberOfPages = numberOfPages;
}
function readBook(book) {
    book.readed = true;
}
var PanTadeusz = {
    author: "Adam Mickiewicz",
    title: "Pan Tadzio",
    readed: false
};
var SkazaniNaShawshank = {
    author: "Stephen King",
    title: "Shawshanks",
    numberOfPages: 3333,
    readed: true
};
setPages(PanTadeusz, 200);
showBook(PanTadeusz);
showBook(SkazaniNaShawshank);
readBook(PanTadeusz);
showBook(SkazaniNaShawshank);
