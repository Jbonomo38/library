const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`;
    }
};

// function addBookToLibrary(book, library) {
//     library.push(book);
// }

// function libraryIndex(library) {
//     const libIndex =[];

//     library.forEach((book) => {
//         console.log(book.info());
//         // document.createElement("book", book.info());
//         libIndex.push(book.info());
//     });

//     return libIndex;
// };

function libraryIndex(library) {
    const tableBody = document.querySelector('#libraryTable tbody');
    tableBody.innerHTML = ''; // Clear the table body

    library.forEach((book, index) => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const pagesCell = document.createElement('td');
        pagesCell.textContent = book.pages;
        row.appendChild(pagesCell);

        const readCell = document.createElement('td');
        const readCheckbox = document.createElement('input');
        readCheckbox.type = 'checkbox';
        readCheckbox.checked = book.hasRead;
        readCheckbox.addEventListener('change', () => {
            book.hasRead = readCheckbox.checked;
        });
        readCell.appendChild(readCheckbox);
        row.appendChild(readCell);

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            libraryIndex(myLibrary);
        });
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        tableBody.appendChild(row);
    });
}


// for demonstration purposes
const addBookBtn = document.getElementById('addBookBtn');
const bookModal = document.getElementById('bookModal');
const bookForm = document.getElementById('bookForm');

addBookBtn.addEventListener('click', () => {
  bookModal.showModal();
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const hasRead = document.getElementById('hasRead').checked;

  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);

  libraryIndex(myLibrary);

  bookModal.close();
  bookForm.reset();
});



const header = document.querySelector("header");

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
myLibrary.push(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, false));
myLibrary.push(new Book("Harry Potter", "J.K. Rowling", 400, true));   

libraryIndex(myLibrary);

// header.appendChild(libraryIndex(myLibrary));


