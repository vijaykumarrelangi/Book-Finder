// BookCard.js
import React from 'react';
import './BookCard.css';

function BookCard({ book, onClick }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/128x195?text=No+Cover';

  return (
    <div className="book-card" onClick={onClick}> {/* Trigger popup on click */}
      <img src={coverUrl} alt={`${book.title} cover`} />
      <h3>{book.title}</h3>
      <p className="author"><b>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</b></p>
      <p>First Published: {book.first_publish_year || 'N/A'}</p>
    </div>
  );
}

export default BookCard;
