const newBookButton = document.querySelector(".add-book");
const bookModal = document.querySelector(".add-book-modal");
const bookForm = document.querySelector(".book-form");

newBookButton.addEventListener("click",e=>{    
    bookModal.style.display = "block";
})

window.addEventListener("click",e=>{
    if (e.target == bookModal){
        bookModal.style.display = "none";
    }
})

let myLibary = [];

class Book {
    constructor(name, author, numPages, read) {
        this.name = name;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }
}

bookForm.addEventListener("submit",e=>{
    let name = bookForm.bookName.value;
    let author = bookForm.author.value;
    let numPages = bookForm.numPages.value;
    let read = bookForm.read.checked;
})

