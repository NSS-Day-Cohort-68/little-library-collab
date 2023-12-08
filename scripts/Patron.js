// - `Patron.js`
//     - Import `getPatrons` from `Database.js`
//       - Functions:
//         - Export `getPatron(patronId)` Use the patronId to return the appropriate patron
//              - Create variable allPatrons using `getPatrons` from the database
//              - Iterate the allPatrons array use the (.find()) array method and return the appropriate patron object

import { getPatrons } from "../database.js";

export const getPatron = (patronId) => {
  const allPatrons = getPatrons();

  const patronObj = allPatrons.find((patron) => patron.id === patronId);

  return patronObj;
};
