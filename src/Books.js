// src/components/OpenLibrarySearch.js
import React, { useState } from "react";

const OpenLibrarySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async (title) => {
    const response = await fetch(`http://openlibrary.org/search.json?title=${title}`);
    const data = await response.json();

    if (data.docs) {
      setBooks(data.docs);
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      searchBooks(searchTerm);
    }
  };

  return (
    <div>
      <h1>Book Finder</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a book"
      />
      <button onClick={handleSearch}>Search</button>

      <div className="book-list">
        {books.map((book) => (
          <div key={book.key} className="book-item">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              alt={book.title}
            />
            <h2>{book.title}</h2>
            <h3>{book.author_name?.join(", ")}</h3>
            <button onClick={() => window.open(`https://openlibrary.org${book.key}`, '_blank')}>
              Read Online
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenLibrarySearch;
