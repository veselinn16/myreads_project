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

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelves books={this.state.books} />
        )}/>
        
        <Route path='/search' render={() => (
          <SearchPage/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
