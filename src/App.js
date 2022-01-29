import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllBooks from "./Components/AllBooks";
import NotFound from "./Components/NotFound";
import Search from "./Components/Search";
import { debounce } from "throttle-debounce";
import * as BooksAPI from "./Utils/BooksAPI";

class BooksApp extends React.Component {
  shelves = [
    { id: "currentlyReading", _name: "Currently Reading" },
    { id: "wantToRead", _name: "Want to read" },
    { id: "read", _name: "read" },
  ];
  state = {
    s_result: [],
    books: [],
    error: false,
  };

  searchMethod = debounce(300, (query) => {
    if (query.length) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ s_result: [] });
        } else {
          this.setState({ s_result: books });
        }
      });
    } else {
      this.setState({ s_result: [] });
    }
  });

  HandelBookShelf = (book,shelf) => {
    //using the API udate method
    BooksAPI.update(book, shelf);

    //make a new array to concat the old books with the new books that i have choosen
    let newDivision = [];
    newDivision = this.state.books.filter((onebook) => onebook.id !== book.id);

    if (shelf !== "none") {
      book.shelf = shelf;
      newDivision = newDivision.concat(book);
    }

    //change the books state with the new books array
    this.setState({
      books: newDivision,
    });
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  render() {
    const { error, books, s_result } = this.state;

    return (
      //If there is an error i will display this message to the user
      error ? (
        <p align="center">There is a network error , Please try again later</p>
      ) : (
        // if there is not an error i will display home page content from the title , the book shelves and the search page which appear at the same page with routing
        <div className="app">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <AllBooks
                  shelves={this.shelves}
                  books={this.state.books}
                  onmoving={this.HandelBookShelf}
                />
              }
            />

            <Route
              path="search"
              element={
                <Search
                  books={books}
                  onmoving={this.HandelBookShelf}
                  onSearch={this.searchMethod}
                  s_result={s_result}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )
    );
  }
}

export default BooksApp;
