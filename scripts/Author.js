// - Import `getAuthors` from `Database.js`
//   - Functions:
//     - Export `getAuthor(authorId)` Use the author id to return the appropriate author
//          - Use array method (.filter()) and check against the argument then return the appropriate author
//

import { getAuthors } from "../database.js";

export const getAuthor = (authorId) => {
  const allAuthors = getAuthors();

  //   const author = allAuthors.find((author) => author.id === authorId);
  //   return author
  return allAuthors.find((author) => author.id === authorId);
};
