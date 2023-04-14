interface Book {
    author: string,
    title: string,
    numberOfPages?: number,
    readed: boolean
}

function showBook(book : Book) {
    if(book.readed){
    console.log(`Autorem przeczytanej książki ${book.title} jest ${book.author}`)}
    else {
        console.log(`Autorem nieprzeczytanej książki ${book.title} jest ${book.author}`)}
    }
function setPages (book: Book, numberOfPages: number){
        book.numberOfPages = numberOfPages
}

function readBook (book: Book){
    book.readed = true
}

const PanTadeusz = {
    author: "Adam Mickiewicz",
    title : "Pan Tadzio",
    readed : false
}
const SkazaniNaShawshank = {
    author: "Stephen King",
    title : "Shawshanks",
    numberOfPages : 3333,
    readed : true
}

setPages(PanTadeusz, 200)
showBook(PanTadeusz)
showBook(SkazaniNaShawshank)
readBook(PanTadeusz)
showBook(SkazaniNaShawshank)