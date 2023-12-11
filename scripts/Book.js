// - `Book.js`
//     - Import `getBooks` from `Database.js`
//       - Functions:
//         - `bookList` - build `bookHTML`
//           - Need author from `Author.js`
//           - Need bookGenre from `Genre.js`
//           - Need bookLog from `BookLog.js`
//             - Use the bookLog to determine if the book is in stock
//           -

import { getAuthors, getBooks } from "../database.js";
import { getAuthor } from "./Author.js";
import { getBookGenre } from "./BookGenre.js";
import { getBookLogsByBookId } from "./BookLog.js";

export const bookList = () => {
  const allBooks = getBooks();
  const allAuthors = getAuthors();

  let bookHTML = `<table>
  <tr>
    <th>Title</th>
    <th>Page Number</th>
    <th>Author</th>
    <th>Genre</th>
    <th>In Stock</th>
  </tr>`;

  for (const book of allBooks) {
    book.author = getAuthor(book.authorId);
    book.genre = getBookGenre(book.id);
    book.bookLogs = getBookLogsByBookId(book.id);
    book.inStock = book.bookLogs.every((bookLog) => bookLog.isReturned);

    console.log("book: ", book);

    bookHTML += `<tr>
        <td>${book.title}</td>
        <td>${book.pages}</td>
        <td>${book.author.name}</td>
        <td>${book.genre.join(", ")}</td>
        <td>${book.inStock ? "Yes" : "No"}
    </tr>`;
  }

  bookHTML += `</table>`;

  return bookHTML;
};

//         - Export `getBook(bookId)` Use the bookId to return the appropriate book
// Get One book
// import `getBooks` from `Database.js`
// export function getBook(bookId)
// Get all books from database set it to variable named allBooks
// Use .find() method & bookId to find the appropriate book
// Return book obj

export const getBook = (bookId) => {
  const allBooks = getBooks();

  const bookObj = allBooks.find((book) => book.id === bookId);
  return bookObj;
};
