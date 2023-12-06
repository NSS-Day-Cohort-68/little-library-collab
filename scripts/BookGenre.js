//     - Import `getBookGenres` from `Database.js`
//     - Import `getGenre` from `Genre.js`
//       - Functions:
//         - Export `getBookGenre(bookId)` Use the book id to return the appropriate bookGenre/bookGenres
//              Use array method (.filter()) and check against the argument bookId and return the appropriate bookGenre or bookGenres EX: { id: 13, bookId: 13, genreId: 1 },{ id: 14, bookId: 13, genreId: 2 }
//                  Store each bookGenre object in an array (bookGenres)
//                      Iterate through the bookGenres array
//                          for each object invoke `getGenre()` and pass genreId
//                          Store the returned genre name in an array called bookGenreNames
//                          Return bookGenreNames array
