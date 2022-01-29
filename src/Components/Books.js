import React from "react";
import Shelf from "./Shelf";

const Books = (props) => {
  const { shelves, books, onmoving } = props;
  return (
    <div className="list-books-content">
      <div>
        {shelves.map((shelf) => (
          <Shelf
            key={shelf.id}
            shelf={shelf}
            books={books}
            onmoving={onmoving}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
