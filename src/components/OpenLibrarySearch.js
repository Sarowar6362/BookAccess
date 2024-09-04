// src/components/OpenLibrarySearch.js
import React, { useState } from "react";
import "../styles/App.css";
import "../App.css"
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
    <div className="app">
      <h1>Book Finder</h1>
      <div className="search">
        
      <input
        type="text"
        
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a book"
      />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={handleSearch}
        />
          </div>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.key} className="book-item">
            <img
              src={book.cover_i !== 'N/A' ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : "https://via.placeholder.com/400"}
              alt={book.title}
            />
            <h2>{book.title}</h2>
            <h4>{book.author_name?.join(", ")}</h4><br></br>
            <button onClick={() => window.open(`https://openlibrary.org${book.key}`, '_blank')} className="download2">
              Read Online
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenLibrarySearch;
