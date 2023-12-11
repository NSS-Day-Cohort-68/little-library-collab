// - `BookLog.js`

// Display a list of book logs with the name of the borrower, the library card info, the book lent, the checkout date & the date due

//     - Import `getBookLogs` from `Database.js`
import { getBookLogs, getPatrons } from "../database.js";
//     - Import `getPatron` from `Patron.js`
import { getPatron } from "./Patron.js";
//     - Import `getBook` from `Book.js`
import { getBook } from "./Book.js";
//       - Functions:
//         - `bookLogList` - build `bookLogHTML`
//           - Need patron from `Patron.js`
//           - Need book from `Book.js`
export const bookLogList = () => {
  const allBookLogs = getBookLogs();
  let bookListHTML = `<table>
  <tr>
    <th>Borrower Name</th>
    <th>Library Card Info</th>
    <th>Book</th>
    <th>Checkout Date</th>
    <th>Returned</th>
  </tr>`;
  for (const bookLog of allBookLogs) {
    const patron = getPatron(bookLog.patronId);
    const book = getBook(bookLog.bookId);
    bookListHTML += `<tr>
        <td>${patron.name}</td>
        <td>${patron.libraryCard}</td>
        <td>${book.title}</td>
        <td>${bookLog.checkoutDate}</td>
        <td>${bookLog.isReturned ? "Yes" : "No"}</td>
    </tr>`;
  }
  bookListHTML += `</table>`;
  return bookListHTML;
};

//         - Export `getBookLog(bookId)` Use the bookId to return the appropriate bookLog/bookLogs
//              Create a variable allBookLogs
//              Use the array method (.filter()) to return the appropriate bookLogs to a variable filteredBookLogs
//              Use filteredBookLogs
//                  Iterate the filteredBookLog array
//                      For each bookLog:
//                          Invoke getPatron and pass the patronId
//                              Store the returned patron object in the filteredBookLOg object as .patron
//                  Return filteredBookLog array  (LET'S THINK ABOUT THIS WHEN IT'S TIME)

export const getBookLogsByBookId = (bookId) => {
  const allBookLogs = getBookLogs();

  const filteredBookLogs = allBookLogs.filter(
    (bookLog) => bookLog.bookId === bookId
  );
  filteredBookLogs.map((bookLog) => {
    bookLog.patron = getPatron(bookLog.patronId);
  });
  return filteredBookLogs;
};

// START WITH THIS:
// {
//     id: 1,
//     checkoutDate: "2023-05-10",
//     isReturned: false,
//     patronId: 1,
//     bookId: 3,
//   }

// END WITH THIS:
// {
//     id: 1,
//     checkoutDate: "2023-05-10",
//     isReturned: false,
//     patronId: 1,
//     patron: {
//            id: 1,
//            name: "Alice Trammel",
//            libraryCard: "ALICE123"
//            }
//     bookId: 3
//   }
