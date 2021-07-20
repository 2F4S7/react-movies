import React from 'react';

function MovieCard({ poster, title, rating, descr, genres }) {
  const IMG_URL = 'http://image.tmdb.org/t/p/w500';
  return (
    <div>
      <img src={`${IMG_URL}${poster}`} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>Movie rating: {rating}</p>
        <h3>Overview</h3>
        <p>{descr}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;
