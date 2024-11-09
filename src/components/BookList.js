// BookList.js
import React from 'react';
import BookCard from './BookCard';

function BookList({ books }) {
  return (
    <div>
    
      {books.length > 0 ? (
        books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default BookList;
