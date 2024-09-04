import React from 'react';

const MovieCard = ({ movie: { author_name, cover_i, title } }) => {
  return (
    <div className="movie">
      <div>
        <p></p>
      </div>

      <div>
        <img src={cover_i !== "N/A" ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : "https://via.placeholder.com/400"} alt={title} />
      </div>

      <div>
        <span></span>
        <h3>{title}</h3>
         <h3>{author_name?.join(", ")}</h3>
      </div>
    </div>
  );
}

export default MovieCard;