// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    if (title.trim()) {
      onSearch(title);
    }
  };

  return (
    
    <div class="search-bar-container">
    
    
      <input
        type="text"
        placeholder="Enter Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
    </div>
    
  );
}

export default SearchBar;
