import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import BookSearch from './Components/BookSearch'
import BookList from './Components/BookList'

class App extends React.Component {
  state = {
    books: {}
  }

  componentDidMount () {
    this.fetchBooks()
  }

  fetchBooks = () => {
    BooksAPI.getAll().then(books => {
      const booksObj = {}
      books.forEach(book => (booksObj[book.id] = book))
      this.setState({
        books: booksObj
      })
    })
  }

  handleChange = (event, book) => {
    const oldBooks = this.state.books
    const shelf = event.target.value

    if (shelf === 'none') {
      delete oldBooks[book.id]
    } else if (!(book.id in oldBooks)) {
      oldBooks[book.id] = book
    } else {
      oldBooks[book.id].shelf = shelf
    }

    BooksAPI.update(book, shelf).then(this.setState({ books: oldBooks }))
  }

  handleBookSearch = event => {
    let currentStateBooks = this.state.books
    if (event.target.value === '') {
      currentStateBooks['search_results'] = []
      this.setState({ books: currentStateBooks })
    } else {
      BooksAPI.search(event.target.value).then(books =>
        books && !books.error
          ? (currentStateBooks['search_results'] = books)
          : ''
      )
      this.setState({ books: currentStateBooks })
    }
  }

  render () {
    return (
      <div className='app'>
        <Routes>
          <Route
            exact
            path='/search'
            element={
              <BookSearch
                fetchBooks={this.fetchBooks}
                handleBookSearch={this.handleBookSearch}
                handleChange={this.handleChange}
                books={this.state.books}
              />
            }
          />
          <Route
            exact
            path='/'
            element={
              <BookList
                handleChange={this.handleChange}
                books={this.state.books}
              />
            }
          />
        </Routes>
      </div>
    )
  }
}

export default App
