import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from './Book'


class SearchPage extends Component {
  state = {
    search: '',
    newBooks: []
  };

  // failedSearch = search => {
  //   this.setState({ search: search.trim() });
  // };

  showResults = () => {
    BooksAPI.search(this.state.search).then(searched => {
      this.setState({ newBooks: searched })
    }).catch(this.setState({ newBooks: []}))
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
    this.showResults();
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf">
              <h2 className="bookshelf-title">Search Results</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {(this.state.newBooks) &&
                  (this.state.newBooks.map(book =>
                    <Book book={book}/>
                  ))}
                </ol>
              </div>
            </div>
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage