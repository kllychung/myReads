import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import { BOOK_SHELVES } from '../Constants'

const BookList = props => {
  const filterBooks = books => shelf =>
    books.filter(b => {
      return b.shelf === shelf
    })
  const getShelfBooks = filterBooks(Object.values(props.books))

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {BOOK_SHELVES.map(shelf =>
            shelf.display ? (
              <BookShelf
                title={shelf.displayName}
                handleChange={props.handleChange}
                key={shelf.name}
                shelf_key={shelf.name}
                shelfBooks={getShelfBooks(shelf.name)}
              />
            ) : (
              ''
            )
          )}
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  )
}

export default BookList
