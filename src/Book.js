import React, { Component } from 'react';
import * as BooksAPI from "./BooksAPI";

class Book extends Component {
  state = {
    shelf: this.props.book.shelf,
  }

  updateBookshelf = (newShelf) => {
    BooksAPI.update(this.props.book, newShelf).then( newShelf => {
      this.setState({ shelf: newShelf })
    }) 
  }

  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select id='shelf' value={this.state.shelf} onChange={event => this.updateBookshelf(event.target.value)}>
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
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book