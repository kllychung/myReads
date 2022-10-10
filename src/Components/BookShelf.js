import React from 'react'
import Book from './Book'

function BookShelf(props) {
  const { title, shelfBooks, handleChange } = props
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {shelfBooks.map(book => (
            <li key={book.title}>
              <Book
                author={book.authors}
                title={book.title}
                key={book.id}
                backgroundImage={
                  book.imageLinks ? book.imageLinks.thumbnail : ''
                }
                id={book.id}
                shelf={book.shelf}
                handleChange={handleChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
