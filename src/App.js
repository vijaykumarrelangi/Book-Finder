import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import Popup from './components/Popup';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null); // State to track selected book for popup

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = query
          ? `https://openlibrary.org/search.json?title=${query}&page=${page}&limit=20`
          : `https://openlibrary.org/search.json?title=computer&page=${page}&limit=20`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBooks(data.docs);
        setTotalPages(Math.ceil(data.num_found / 20));
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("There was an issue fetching books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  // Open the popup with the selected book details
  const openPopup = (book) => {
    setSelectedBook(book);
  };

  // Close the popup
  const closePopup = () => {
    setSelectedBook(null);
  };

  return (
    <div>
    
      <SearchBar onSearch={handleSearch} />
    
      <div className="book-list">
        {loading ? (
          <p>Loading books...</p>
        ) : error ? (
          <p>{error}</p>
        ) : books.length === 0 ? (
          <p>No books found</p>
        ) : (
          books.map((book) => (
            <BookCard key={book.key} book={book} onClick={() => openPopup(book)} />
          ))
        )}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(Math.max(page - 1, 1))} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(Math.min(page + 1, totalPages))} disabled={page === totalPages}>Next</button>
      </div>

      {selectedBook && (
        <Popup book={selectedBook} onClose={closePopup} />
      )}
    </div>
  );
}

export default App;
