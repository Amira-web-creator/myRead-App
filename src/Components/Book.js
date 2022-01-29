import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelfValue: this.props.shelf,
    };
  }

  //moving books from shelf to another one
  moving = (e) => {
    this.setState({ shelfValue: e.target.value });
    this.props.onmoving(this.props.book, e.target.value);
  };
  render() {
    const { book } = this.props;

    const styles = {
      width: 128,
      height: 193,
      backgroundImage:
        book.imageLinks === null || book.imageLinks === undefined
          ? ""
          : `url(${book.imageLinks.thumbnail}`,
    };
    return (
      //one book with details
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={styles} />
            <div className="book-shelf-changer">
              <select value={this.state.shelfValue} onChange={this.moving}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors ? book.authors.join(" | ") : "unknown author"}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
