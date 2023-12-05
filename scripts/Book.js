// - `Book.js`
//     - Import `getBooks` from `Database.js`
//       - Functions:
//         - `bookList` - build `bookHTML`
//           - Need author from `Author.js`
//           - Need bookGenre from `Genre.js`
//           - Need bookLog from `BookLog.js`
//             - Use the bookLog to determine if the book is in stock
//         - Export `getBook(bookId)` Use the bookId to return the appropriate book
