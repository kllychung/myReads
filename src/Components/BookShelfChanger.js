import React from 'react'
import { BOOK_SHELVES } from '../Constants'

const BookShelfChanger = props => {
  return (
    <div className='book-shelf-changer'>
      <select
        book={props.book}
        defaultValue={props.book.shelf ? props.book.shelf : 'none'}
        onChange={e => props.handleChange(e, props.book)}
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
