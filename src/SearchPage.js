import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SearchPage extends Component {
  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search: search.trim() });
  };

//   clearSearch = () => {
//     this.setState({ search: '' });
//   };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default SearchPage