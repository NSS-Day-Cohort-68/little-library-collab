const Database = {
  books: [
    { id: 1, title: "The Catcher in the Rye", pages: 224, authorId: 1 },
    { id: 2, title: "To Kill a Mockingbird", pages: 281, authorId: 2 },
    { id: 3, title: "1984", pages: 328, authorId: 3 },
    { id: 4, title: "Animal Farm", pages: 112, authorId: 3 },
    { id: 5, title: "The Great Gatsby", pages: 180, authorId: 4 },
    { id: 6, title: "One Hundred Years of Solitude", pages: 417, authorId: 5 },
    { id: 7, title: "The Hobbit", pages: 310, authorId: 6 },
    { id: 8, title: "The Lord of the Rings", pages: 1178, authorId: 6 },
    { id: 9, title: "Pride and Prejudice", pages: 279, authorId: 7 },
    { id: 10, title: "Jane Eyre", pages: 507, authorId: 8 },
    { id: 11, title: "Wuthering Heights", pages: 342, authorId: 8 },
    {
      id: 12,
      title: "The Adventures of Huckleberry Finn",
      pages: 366,
      authorId: 9,
    },
    { id: 13, title: "The Adventures of Tom Sawyer", pages: 193, authorId: 9 },
    { id: 14, title: "Moby-Dick", pages: 585, authorId: 10 },
    { id: 15, title: "The Picture of Dorian Gray", pages: 254, authorId: 11 },
    { id: 16, title: "Dracula", pages: 418, authorId: 12 },
    { id: 17, title: "Frankenstein", pages: 280, authorId: 13 },
    { id: 18, title: "The War of the Worlds", pages: 192, authorId: 14 },
    { id: 19, title: "The Time Machine", pages: 118, authorId: 14 },
    {
      id: 20,
      title: "The Adventures of Sherlock Holmes",
      pages: 307,
      authorId: 15,
    },
    {
      id: 21,
      title: "The Hound of the Baskervilles",
      pages: 190,
      authorId: 15,
    },
    { id: 22, title: "Treasure Island", pages: 210, authorId: 16 },
    { id: 23, title: "Robinson Crusoe", pages: 320, authorId: 17 },
    { id: 24, title: "Gulliver's Travels", pages: 306, authorId: 18 },
    { id: 25, title: "The Call of the Wild", pages: 160, authorId: 19 },
    { id: 26, title: "White Fang", pages: 328, authorId: 19 },
    { id: 27, title: "The Wind in the Willows", pages: 256, authorId: 20 },
    { id: 28, title: "The Jungle Book", pages: 144, authorId: 21 },
    { id: 29, title: "Heart of Darkness", pages: 72, authorId: 22 },
    { id: 30, title: "Lord Jim", pages: 428, authorId: 22 },
  ],
  authors: [
    { id: 1, name: "Jane Austen" },
    { id: 2, name: "Harper Lee" },
    { id: 3, name: "George Orwell" },
    { id: 4, name: "F. Scott Fitzgerald" },
    { id: 5, name: "Gabriel García Márquez" },
    { id: 6, name: "J.R.R. Tolkien" },
    { id: 7, name: "Aldous Huxley" },
    { id: 8, name: "Charlotte Brontë" },
    { id: 9, name: "Mark Twain" },
    { id: 10, name: "Herman Melville" },
    { id: 11, name: "Oscar Wilde" },
    { id: 12, name: "Bram Stoker" },
    { id: 13, name: "Mary Shelley" },
    { id: 14, name: "H.G. Wells" },
    { id: 15, name: "Arthur Conan Doyle" },
    { id: 16, name: "Robert Louis Stevenson" },
    { id: 17, name: "Daniel Defoe" },
    { id: 18, name: "Jonathan Swift" },
    { id: 19, name: "Jack London" },
    { id: 20, name: "Kenneth Grahame" },
    { id: 21, name: "Rudyard Kipling" },
  ],
  genres: [
    { id: 1, type: "Science Fiction" },
    { id: 2, type: "Mystery" },
    { id: 3, type: "Romance" },
    { id: 4, type: "Horror" },
    { id: 5, type: "Fantasy" },
  ],
  bookGenres: [
    { id: 1, bookId: 1, genreId: 3 },
    { id: 2, bookId: 2, genreId: 2 },
    { id: 3, bookId: 3, genreId: 1 },
    { id: 4, bookId: 4, genreId: 1 },
    { id: 5, bookId: 5, genreId: 5 },
    { id: 6, bookId: 6, genreId: 5 },
    { id: 7, bookId: 7, genreId: 5 },
    { id: 8, bookId: 8, genreId: 5 },
    { id: 9, bookId: 9, genreId: 3 },
    { id: 10, bookId: 10, genreId: 3 },
    { id: 11, bookId: 11, genreId: 4 },
    { id: 12, bookId: 12, genreId: 4 },
    { id: 13, bookId: 13, genreId: 1 },
    { id: 14, bookId: 13, genreId: 2 },
    { id: 15, bookId: 14, genreId: 5 },
    { id: 16, bookId: 15, genreId: 4 },
    { id: 17, bookId: 16, genreId: 4 },
    { id: 18, bookId: 17, genreId: 4 },
    { id: 19, bookId: 18, genreId: 1 },
    { id: 20, bookId: 18, genreId: 2 },
    { id: 21, bookId: 19, genreId: 5 },
    { id: 22, bookId: 20, genreId: 5 },
    { id: 23, bookId: 21, genreId: 2 },
    { id: 24, bookId: 21, genreId: 5 },
    { id: 25, bookId: 22, genreId: 5 },
    { id: 26, bookId: 23, genreId: 5 },
    { id: 27, bookId: 24, genreId: 5 },
    { id: 28, bookId: 25, genreId: 5 },
    { id: 29, bookId: 26, genreId: 5 },
    { id: 30, bookId: 27, genreId: 5 },
    { id: 31, bookId: 28, genreId: 5 },
    { id: 32, bookId: 29, genreId: 4 },
    { id: 33, bookId: 30, genreId: 4 },
  ],
  patrons: [
    { id: 1, name: "Alice Trammel", libraryCard: "ALICE123" },
    { id: 2, name: "Bob Devoe", libraryCard: "BOB456" },
    { id: 3, name: "Charlie Wyatt", libraryCard: "CHARLIE789" },
    { id: 4, name: "David Young", libraryCard: "DAVID012" },
    { id: 5, name: "Eve Winchester", libraryCard: "EVE345" },
  ],
  bookLogs: [
    {
      id: 1,
      checkoutDate: "2023-05-10",
      isReturned: false,
      patronId: 1,
      bookId: 3,
    },
    {
      id: 2,
      checkoutDate: "2023-05-09",
      isReturned: true,
      patronId: 2,
      bookId: 5,
    },
    {
      id: 3,
      checkoutDate: "2023-04-08",
      isReturned: false,
      patronId: 3,
      bookId: 1,
    },
    {
      id: 4,
      checkoutDate: "2023-05-07",
      isReturned: true,
      patronId: 4,
      bookId: 2,
    },
    {
      id: 5,
      checkoutDate: "2023-05-06",
      isReturned: false,
      patronId: 5,
      bookId: 4,
    },
    {
      id: 6,
      checkoutDate: "2023-06-09",
      isReturned: true,
      patronId: 4,
      bookId: 5,
    },
    {
      id: 7,
      checkoutDate: "2023-09-09",
      isReturned: true,
      patronId: 2,
      bookId: 14,
    },
  ],
};

// - `Database.js`
//     - Functions:
//       - Export getter functions for all collections:
//         - `getBooks`
//         - `getAuthors`
//         - `getPatrons`
//         - `getGenres`
//         - `getBookGenres`
//         - `getBookLogs`

// export const getBooks = () => {
// Step 1
// step 2
// return
// }

export const getBooks = () => Database.books.map((book) => ({ ...book }));
export const getAuthors = () =>
  Database.authors.map((author) => ({ ...author }));
export const getPatrons = () =>
  Database.patrons.map((patron) => ({ ...patron }));
export const getGenres = () => structuredClone(Database.genres);
export const getBookGenres = () => structuredClone(Database.bookGenres);
export const getBookLogs = () => structuredClone(Database.bookLogs);
