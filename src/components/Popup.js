// components/Popup.js
import React from 'react';
import './Popup.css';

function Popup({ book, onClose }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/150x220?text=No+Cover';

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="popup-details">
        <div className="popup-image">
            <img src={coverUrl} alt={`${book.title} cover`} />
          </div>
          <div className="popup-text">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author_name?.join(', ') || 'Unknown'}</p>
            <p><strong>First Publish Year:</strong> {book.first_publish_year || 'N/A'}</p>
            <p><strong>Publish Place :</strong> {book.publish_place || 'N/A'}</p>
            <p><strong>Description:</strong> {book.subject || 'No description available.'}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Popup;
