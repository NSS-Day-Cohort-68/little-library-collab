// - `BookLog.js`

// Display a list of book logs with the name of the borrower, the library card info, the book lent, the checkout date & the date due

//     - Import `getBookLogs` from `Database.js`
//     - Import `getPatron` from `Patron.js`
//     - Import `getBook` from `Book.js`
//       - Functions:
//         - `bookLogList` - build `bookLogHTML`
//           - Need patron from `Patron.js`
//           - Need book from `Book.js`
//         - Export `getBookLog(bookId)` Use the bookId to return the appropriate bookLog/bookLogs
//              Create a variable allBookLogs
//              Use the array method (.filter()) to return the appropriate bookLogs to a variable filteredBookLogs
//              Use filteredBookLogs
//                  Iterate the filteredBookLog array
//                      For each bookLog:
//                          Invoke getPatron and pass the patronId
//                              Store the returned patron object in the filteredBookLOg object as .patron
//                          Invoke getBook and pass the bookId
//                              Store the returned book object in the filteredBookLog object as .book
//                  Return filteredBookLog array

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
//     bookId: 3,
//     book: {
//            id: 30,
//            title: "Lord Jim",
//            pages: 428,
//            authorId: 22
//            }
//   }
