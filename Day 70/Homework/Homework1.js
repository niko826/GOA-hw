function Book(title, author, year, genre) {
  if (typeof year === "number" && title.length >= 3) {
    console.log(`The book name is ${title} its author is ${author} and the book was released in ${year}`);
  } else {
    console.error("Error: Invalid book data");
  }
}

const book1 = new Book("1984", "George Orwell", 1949, "Dystopian");
const book2 = new Book("It", "Stephen King", 1986, "Horror");
const book3 = new Book("Go", "John Doe", "1999", "Fiction"); // Error
