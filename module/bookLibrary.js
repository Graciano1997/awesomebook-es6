export default class BooksLibrary {
  constructor() {
    this.bookArray = (JSON.parse(localStorage.getItem('booksDb')) !== null) ? (JSON.parse(localStorage.getItem('booksDb'))) : ([]);
  }
}
