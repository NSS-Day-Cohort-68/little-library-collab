# Planning

### Modules

- Create `main.js`

  - Create an HTML string `libraryHTML` for the DOM
    - Create header `<h1>Little Library</h1>`
    - Create `<nav id="navbar">`
      - Link to book inventory view `Inventory`
        - Display a book inventory list with title, page number, author and genre (indicate whether the book is currently in stock or not)
      - Link to book log view `Log`
        - Display a list of book logs with the name of the borrower, the library card info, the book lent, the checkout date & the date due

- Create data modules:

  - `Book.js`
    - Import `getBooks` from `Database.js`
      - Functions:
        - `bookList` - build `bookHTML`
          - Need author from `Author.js`
          - Need bookGenre from `Genre.js`
          - Need bookLog from `BookLog.js`
            - Use the bookLog to determine if the book is in stock
        - Export `getBook(bookId)` Use the bookId to return the appropriate book
  - `Author.js`
    - Import `getAuthors` from `Database.js`
      - Functions:
        - Export `getAuthor(authorId)` Use the author id to return the appropriate author
  - `Patron.js`
    - Import `getPatrons` from `Database.js`
      - Functions:
        - Export `getPatron(patronId)` Use the patronId to return the appropriate patron
  - `Genre.js`
    - Import `getGenres` from `Database.js`
      - Functions:
        - Export `getGenre(genreId)` Use the genreId to return the appropriate genre
  - `BookGenre.js`
    - Import `getBookGenres` from `Database.js`
      - Functions:
        - Export `getBookGenre(bookId)` Use the book id to return the appropriate bookGenre/bookGenres
  - `BookLog.js`

    - Import `getBookLogs` from `Database.js`
      - Functions:
        - `bookLogList` - build `bookLogHTML`
          - Need patron from `Patron.js`
          - Need book from `Book.js`
        - Export `getBookLog(bookId)` Use the bookLogId to return the appropriate bookLog/bookLogs

  - `Database.js`
    - Functions:
      - Export getter functions for all collections:
        - `getBooks`
        - `getAuthors`
        - `getPatrons`
        - `getGenres`
        - `getBookGenres`
        - `getBookLogs`

- Create `index.html`
  - `<section id="library">`
- Create `main.css`
