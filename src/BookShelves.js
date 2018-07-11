import React from 'react';
import CurrentlyReadingShelf from './CurrentlyReading'
import WantToReadShelf from './WantToRead';
import ReadShelf from './Read';
import OpenSearch from './OpenSearch';

function BookShelves() {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <CurrentlyReadingShelf />
                <WantToReadShelf />
                <ReadShelf />
            </div>
            <OpenSearch/>
        </div>
    )
}

export default BookShelves