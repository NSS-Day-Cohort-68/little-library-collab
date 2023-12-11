# little-library-collab

Let's build a very small library.

### Planning requirements:

- Build an ERD from the dataset
- Map out the entire app before coding with attention to module, variable, id and class names

### Functional Requirements:

- There should be a nav section that directs the user to either the book logs section or the inventory section.
- Display a book inventory list with title, page number, author and genre (indicate whether the book is currently in stock or not)
- Display a list of book logs with the name of the borrower, the library card info, the book lent, the checkout date & the date due
- Allow for a book to be checked out
- Allow for a book to be returned

### Design requirements:

- Both the book inventory and the book logs should be displayed in a tabular format
- The checkout functionality should be in the inventory table
- The return functionality should be in the book log table

#### Stretch goals

- Search authors

##### Notes

- Does returned belong on the book or the bookLog?
- Talk about temporary state...
- Do some error checking with Author module
- Revisit return date using datetimes
