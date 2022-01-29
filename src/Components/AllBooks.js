import PropTypes from "prop-types";
import React from "react";
import Books from "./Books";
import OpenSearch from "./OpenSearch";

const AllBooks = (props) => {
  const { shelves, books, onmoving } = props;

  return (
    //books shelves and the open search button which navigate to the search page

    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <Books shelves={shelves} books={books} onmoving={onmoving} />
      <OpenSearch
        onNavigate={() => {
          this.setState(() => ({
            showSearchPage: true,
          }));
        }}
      />
    </div>
  );
};

//using the PropTypes to define the data type we want to see

AllBooks.propTypes = {
  shelves: PropTypes.array,
  books: PropTypes.array,
  onmoving: PropTypes.func,
};
export default AllBooks;
