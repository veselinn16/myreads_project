import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Book from './Book'

class SearchPage extends Component {
  showResults = (search) => {
    this.props.showResults(search.trim())
  }

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
              onChange={(event) => this.showResults(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf">
              <h2 className="bookshelf-title">Search Results</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map(book =>
                    <li key={book.id}>
                      <Book book={book} changeShelf={this.props.changeShelf}/>
                    </li>
                  )}
                </ol>
              </div>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage