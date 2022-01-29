import React from "react";
import Book from "./Book";

const Shelf = (props) => {
  const { shelf, books, onmoving } = props; //passing props for Book component
  const shelf_books = books.filter((oneBook) => oneBook.shelf === shelf.id); //filter books to the shelves
  return (
    //the book shelves with the books props
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf._name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelf_books.map((oneBook) => (
            <Book
              key={oneBook.id}
              book={oneBook}
              shelf={shelf.id}
              onmoving={onmoving}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
