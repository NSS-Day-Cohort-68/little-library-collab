//     - Import `getBookGenres` from `Database.js`
//     - Import `getGenre` from `Genre.js`
//       - Functions:
//         - Export `getBookGenre(bookId)` Use the book id to return the appropriate bookGenre/bookGenres
//              Use array method (.filter()) and check against the argument bookId and return the appropriate bookGenre or bookGenres EX: { id: 13, bookId: 13, genreId: 1 },{ id: 14, bookId: 13, genreId: 2 }
//                  Store each bookGenre object in an array (filteredBookGenres)
//                      Iterate through the bookGenres array
//                          for each object invoke `getGenre()` and pass genreId
//                          Store the returned genre name in an array called bookGenreNames
//                          Return bookGenreNames array

import { getBookGenres } from "../database.js";
import { getGenre } from "./Genre.js";
export const getBookGenre = (bookId) => {
  const allBookGenres = getBookGenres();

  const filteredBookGenres = allBookGenres.filter(
    (bookGenre) => bookGenre.bookId === bookId
  );

  const bookGenreNames = filteredBookGenres.forEach((bookGenre) =>
    getGenre(bookGenre.genreId)
  );

  // Same thing as .forEach()
  // const bookGenreNames = []
  // for (const bookGenre of filteredBookGenres) {
  //     const genreName = getGenre(bookGenre.genreId)
  //     bookGenreNames.push(genreName)
  // }

  // Also same thing as .forEach()
  // const bookGenreNames = filteredBookGenres.map(bookGenre => getGenre(bookGenre.genreId))

  return bookGenreNames;
};
