let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {

    if (book.constructor.name == 'Book') {
        myLibrary.push(book)
    }

}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true)
const harry = new Book('Harry Potter', 'J.K. Rowling', 300, true)
const rose = new Book('The Name of The Rose', 'Umberto Eco', 200, false)
const alamut = new Book('Alamut', 'V. Bartol', 400, false)


addBookToLibrary(hobbit)
addBookToLibrary(harry)
addBookToLibrary(rose)
addBookToLibrary(alamut)

function showLibrary(library) {
    for (i in library) {
        const book = document.createElement('div');
        const pAuthor = document.createElement('h5')
        const pTitle = document.createElement('h6')
        const pPages = document.createElement('p')
        const pRead = document.createElement('p')
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')

        book.classList.add('card')

        const author = document.createTextNode(library[i].author)
        pAuthor.appendChild(author)
        pAuthor.classList.add('card-subtitle')

        const title = document.createTextNode(library[i].title)
        pTitle.appendChild(title)
        pTitle.classList.add('card-title')

        const pages = document.createTextNode('Number of pages: ' + library[i].pages)
        pPages.appendChild(pages)
        pPages.classList.add('card-text')

        checkbox.checked = library[i].read
        const read = document.createTextNode('Have I read it? ')
        pRead.appendChild(read)
        pRead.appendChild(checkbox)
        pRead.classList.add('card-text')

        book.append(pAuthor, pTitle, pPages, pRead);
        var content = document.getElementById('content')
        content.appendChild(book)
    }
}

const submit = document.getElementById('submit');
submit.addEventListener('click', addNewBook);

function addNewBook(e) {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked

    if (title != '' && author != '' && pages != '') {
        const newBook = new Book(title, author, pages, read)
        addBookToLibrary(newBook);

        $("#modalAdd").modal("hide");

    } else {
        alert('You have to put in everything!')

    }
    document.getElementById('author').value = ''
    document.getElementById('title').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').checked = false
    document.getElementById('content').innerHTML = ''
    showLibrary(myLibrary)
}


showLibrary(myLibrary)