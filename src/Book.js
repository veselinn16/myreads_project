import React, { Component } from 'react'

class Book extends Component {
  state = {
    shelf: this.props.book.shelf,
    updating: false
  }

  updateBookshelf = (event) => {
    this.props.changeShelf(this.props.book, event.target.value);
    this.setState({ 
      shelf: event.target.value,
      updating: true
    })
  }

  componentWillReceiveProps() {
    this.setState({
      updating: false
    })
  }

  render() {
    const { book } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No+Cover'})`
            }}
          />
          <div className="book-shelf-changer">
            <select id='shelf' value={this.state.shelf} onChange={this.updateBookshelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            {this.state.updating && (<div className="loader"></div>)}
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book