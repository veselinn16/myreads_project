import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves';
import SearchPage from './SearchPage';


class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      // Update the local copy of the book
      book.shelf = newShelf;

      // Filter out the book and append it to the end of the list
      // so it appears at the end of whatever shelf it was added to.
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelves books={this.state.books} changeShelf={this.changeShelf}/>
        )}/>
        
        <Route path='/search' render={() => (
          <SearchPage/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
