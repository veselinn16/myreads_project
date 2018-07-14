import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import SearchPage from './SearchPage'

class BooksApp extends Component {
  state = {
    books: [],
    newBooks : []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf

      // Filter book and put it at the end of selected shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  showResults = (search) => {
    if (search) {
      BooksAPI.search(search).then((books) => {
        if (books.length) {
          books.forEach((book, index) => {
            let aBook = this.state.books.find((b) => b.id === book.id)
            book.shelf = aBook ? aBook.shelf : 'none';
            books[index] = book
          })
          this.setState({
            newBooks: books
          })
        }
      })
    } else {
      this.setState({
        newBooks: []
      })
    }
  }

  render() {
    return <div className="app">
        <Route exact path="/" render={() => <BookShelves books={this.state.books} changeShelf={this.changeShelf} />} />

        <Route path="/search" render={({ history }) => <SearchPage books={this.state.newBooks} changeShelf={this.changeShelf} showResults={this.showResults}/>} />
      </div>
  }
}

export default BooksApp