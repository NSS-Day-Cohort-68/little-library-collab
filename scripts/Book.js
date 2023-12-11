// - `Book.js`
//     - Import `getBooks` from `Database.js`
//       - Functions:
//         - `bookList` - build `bookHTML`
//           - Need author from `Author.js`
//           - Need bookGenre from `Genre.js`
//           - Need bookLog from `BookLog.js`
//             - Use the bookLog to determine if the book is in stock
//         - Export `getBook(bookId)` Use the bookId to return the appropriate book

// import { getBooks } from "../database.js";

// export const bookList = () => {
//   return;
// };

// Get One book
// import `getBooks` from `Database.js`
// export function getBook(bookId)
// Get all books from database set it to variable named allBooks
// Use .find() method & bookId to find the appropriate book
// Return book obj

import { getBooks } from "../database.js";

export const getBook = (bookId) => {
  const allBooks = getBooks();

  const bookObj = allBooks.find((book) => book.id === bookId);
  return bookObj;
};
