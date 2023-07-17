import * as variable from './variable.js';
import BooksLibrary from './bookLibrary.js';

const library = new BooksLibrary();

const bookLayout = (bookCurrent) => {
  const div = document.createElement('div');
  div.classList.add('card-book');
  const divDescr = document.createElement('div');
  divDescr.classList.add('bookDescription');
  const authorName = document.createElement('h2');
  authorName.textContent = bookCurrent.author;
  authorName.classList.add('autor');
  const bookTitle = document.createElement('h3');
  bookTitle.classList.add('title');
  bookTitle.textContent = bookCurrent.title;
  const span = document.createElement('span');
  span.classList.add('spanSpace');
  span.textContent = 'by';
  divDescr.append(bookTitle, span, authorName);
  const button = document.createElement('button');
  button.classList.add('remove-button');
  button.textContent = 'remove';
  button.classList.add('remover');
  const hr = document.createElement('hr');
  div.append(divDescr, button, hr);
  return div;
};

const displayBook = () => {
  if (JSON.parse(localStorage.getItem('booksDb')) !== null) {
    const dbBook = library.bookArray;
    dbBook.forEach((book) => {
      document.querySelector('.list-display').append(bookLayout(book));
    });
  }

  document.querySelectorAll('.card-book').forEach((card, index) => {
    if (index % 2 === 1) {
      card.classList.add('alt');
    }
  });
};

const setBook = (book) => {
  if (book.author !== '' && book.title !== '') {
    library.bookArray.push(book);
    localStorage.setItem('booksDb', JSON.stringify(library.bookArray));
  }
  window.location.reload();
};

const deleteBook = (book) => {
  for (let i = 0; i < library.bookArray.length; i += 1) {
    if (library.bookArray[i].title === book.title && library.bookArray[i].author === book.author) {
      library.bookArray.splice(i, 1);
      localStorage.setItem('booksDb', JSON.stringify(library.bookArray));
      break;
    }
  }
};

const deleteBookListener = () => {
  document.querySelectorAll('.remover').forEach((btnRem) => {
    btnRem.addEventListener('click', () => {
      const bookTitle = btnRem.previousElementSibling.querySelector('.title').innerHTML;
      const authorName = btnRem.previousElementSibling.querySelector('.autor').innerHTML;
      const bookToDel = {
        author: authorName,
        title: bookTitle,
      };
      deleteBook(bookToDel);
      btnRem.parentNode.remove();
    });
  });
};

const addBookListener = () => {
  variable.btnAdd.addEventListener('click', () => {
    const book = {
      author: variable.authorInput.value,
      title: variable.titleInput.value,
    };
    setBook(book);
    variable.authorInput.value = '';
    variable.titleInput.value = '';
  });
};

export {
  addBookListener,
  deleteBookListener,
  deleteBook,
  setBook,
  displayBook,
};
