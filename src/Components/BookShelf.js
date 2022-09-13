import React from 'react'
import Book from './Book'

function BookShelf (props) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {props.shelfBooks.map(book => (
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
                handleChange={props.handleChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
