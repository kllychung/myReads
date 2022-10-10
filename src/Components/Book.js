import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';
import React from 'react';

const Book = props => {
  const { backgroundImage, handleChange, title, author } = props
  const bookImageUrl = `url(${backgroundImage})`
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookImageUrl }}></div>
        <BookShelfChanger book={props} handleChange={handleChange} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Book;