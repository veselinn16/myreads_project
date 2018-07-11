import React, { Component } from 'react';
// import CurrentlyReadingShelf from './CurrentlyReading'
import PropTypes from "prop-types";
import WantToReadShelf from './WantToRead';
import ReadShelf from './Read';
import OpenSearch from './OpenSearch';

class BookShelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
        const { books } = this.props

        return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map( book => 
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                                    <div className="book-shelf-changer">
                                        <select>
                                        <option value="move" disabled>
                                            Move to...
                                        </option>
                                        <option value="currentlyReading">
                                            Currently Reading
                                        </option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        )}
                        </ol>
                        </div>
                </div>
                <WantToReadShelf />
                <ReadShelf />
            </div>
            <OpenSearch/>
        </div>
        )
    }
}

export default BookShelves