import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenSearch from './OpenSearch';
import Book from './Book'

class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  // selectShelf() {
  //   let selectEl = document.getElementsByTagName('option')
  //   (selectEl.val() === book.shelf) && selectEl.setAttribute('selected');
  // }

  render() {
    const { books } = this.props

    return <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(book => book.shelf ===  'currentlyReading' && 
                <li key={book.id}>
                  <Book book={book} shelf={book.shelf} />
                </li>
                )}
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(book => book.shelf ===    'wantToRead' &&
                  <li key={book.id}> 
                    <Book book={book} shelf={book.shelf}/>
                  </li>
                )}
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(book => book.shelf === "read" && 
                <li key={book.id}>
                  <Book book={book} shelf={book.shelf} />
                </li>
                )}
              </ol>
            </div>
          </div>
        <OpenSearch />
      </div>
    </div>;
  }
}

export default BookShelves