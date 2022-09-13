import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

const BookSearch = props => {
    const books = props.books;
    return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search" onClick={props.fetchBooks}>Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={props.handleBookSearch}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {books["search_results"]? books["search_results"].map((book) =>  
          <li key={book.id}>
            <Book                 
              title={book.title}
              author={book.authors} 
              backgroundImage={book.imageLinks? book.imageLinks.thumbnail : ""}
              id={book.id}
              shelf={books[book.id] ? books[book.id].shelf : book.shelf}
              handleChange={props.handleChange}
            />
            </li>): ""}
            </ol>
        </div>
      </div>
    )
}


export default BookSearch;