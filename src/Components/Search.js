import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class Search extends Component {
  state = {
    res: "",
  };

  showingResult = (e) => {
    const val = e.target.value;
    this.setState({ res: val }, () => {
      this.props.onSearch(val);
    });
  };

  render() {
    const { onmoving, s_result, books } = this.props;

    //update books of search result with its shelves

    const shelfied = s_result.map((oneBook) => {
      books.map((b) => {
        if (b.id === oneBook.id) {
          oneBook.shelf = b.shelf;
        }
        return b;
      });
      return oneBook;
    });
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.res}
                onChange={this.showingResult}
                onKeyUp={this.showingResult}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {shelfied.map((onebook) => (
                <Book
                  key={onebook.id}
                  book={onebook}
                  shelf={onebook.shelf ? onebook.shelf : "none"}
                  onmoving={onmoving}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
