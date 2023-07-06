import React, { useEffect, useState } from 'react';

const DetailsPage = ({ ID }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const baseUrl = 'https://api.themoviedb.org/3/movie/';
    const movieId = ID;
    const language = 'en-US';
    const url = `${baseUrl}${movieId}?language=${language}`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MyNWNjMTNhZWIwZWMxNDkxMWE0NWYxOWUzNTA3OSIsInN1YiI6IjY0YTRmMGU0YTBiZTI4MDBjYmY2MjQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96i3JKk4jHwXJS70xjZgyLBjxOATbAJDHGotwTGZ7gc'
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(response => setMovieDetails(response))
      .catch(err => console.error(err));
  }, [ID]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="Backdrop" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;
