const newBookButton = document.querySelector(".add-book");
const bookModal = document.querySelector(".add-book-modal");
const bookForm = document.querySelector(".book-form");
const cardWrapper = document.querySelector(".card-wrapper");

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

    draw(){
        //create card for the book
        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("div");
        let author = document.createElement("div");
        let numPages = document.createElement("div");
        let read = document.createElement("div");
        let remove = document.createElement("button");

        title.classList.add("title");
        author.classList.add("author");
        numPages.classList.add("num-pages");
        read.classList.add("read");
        if (this.read){
            read.classList.add("hasRead");
        }

        remove.classList.add("remove");

        title.textContent = this.name;
        author.textContent = this.author;
        numPages.textContent = this.numPages;
        remove.textContent = "Remove";
        if(this.read){
            read.textContent = "read";
        } else{
            read.textContent = "not read";
        }

        read.addEventListener("click",()=>{
            console.log(this)
            this.toggleRead();
        })
        remove.addEventListener("click",()=>{
            this.remove();
        })

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(numPages);
        card.appendChild(read);
        card.appendChild(remove);

        this.card = card;
        cardWrapper.appendChild(this.card);
    }

    toggleRead(){
        let read = this.card.childNodes[3]
        if(!read.classList.toggle("hasRead")){
            read.textContent = "not read";
            this.read = false;
        } else {
            read.textContent = "read";
            this.read = true;
        }
    }

    remove(){
        let index = myLibary.indexOf(this);
        myLibary.splice(index,1);
        drawBooks();
    }
}

bookForm.addEventListener("submit",e=>{
    e.preventDefault();
    //get form info
    let name = bookForm.bookName.value;
    let author = bookForm.author.value;
    let numPages = bookForm.numPages.value;
    let read = bookForm.read.checked;
    bookModal.style.display = "none";

    let book = new Book(name,author,numPages,read);

    if(checkIfBookExists(book)){
        console.log("exists");
        return;
    }
    //add book to myLibrary
    console.log(addBookToLibrary(book));
    drawBooks();
})

function addBookToLibrary(book){
    myLibary.push(book);
    return "added";
}

//clears wrapper then redraws
function drawBooks(){
    cardWrapper.innerHTML = "";
    myLibary.forEach(book=>{
        book.draw();
    })
}

function checkIfBookExists(book){
    return myLibary.find(e=>{
        if (e.name == book.name){
            return true;
        }
    });
}

