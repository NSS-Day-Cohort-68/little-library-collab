//     - Import `getGenres` from `Database.js`
//       - Functions:
//         - Export `getGenre(genreId)` Use the genreId to return the appropriate genre
//              - Set a variable allGenres to get all Genres by using getGenres from the database

//                     - Iterate allGenres and return the appropriate genre type
import { getGenres } from "../database.js";

export const getGenre = (genreId) => {
  const allGenres = getGenres();

  const genreObj = allGenres.find((genre) => genre.id === genreId);

  // This does the same thing as .find()
  // for (const genre of allGenres){
  //     if(genre.id === genreId) {
  //         return genre
  //     }
  // }

  return genreObj.type;
};
