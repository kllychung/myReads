import React from 'react'
import { BOOK_SHELVES } from '../Constants'

const BookShelfChanger = props => {
  const { book, handleChange } = props
  return (
    <div className='book-shelf-changer'>
      <select
        book={book}
        defaultValue={book.shelf ? book.shelf : 'none'}
        onChange={e => handleChange(e, book)}
      >
        {BOOK_SHELVES.map(shelf => (
          <option key={shelf.name} value={shelf.name}>
            {shelf.displayName}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BookShelfChanger
