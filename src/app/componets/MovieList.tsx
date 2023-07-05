'use client'
import React from 'react'
import Image from 'next/image'
// aqui
import  { useEffect, useState } from 'react';

import Link from 'next/link';
import CardImg from './CardImg';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = '37c25cc13aeb0ec14911a45f19e35079';
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setMovies(data.results);
          console.log(data.results);
        }
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='flex flex-wrap justify-evenly gap-2 max-w-6xl'>
      
      {movies.map((movie) => (
        <CardImg
          key={movie.id}
          imageSrc={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          title={movie.title}
          releaseDate={movie.release_date}
          vote_average={movie.vote_average}
        /> 
      ))}
    </div>
  );
};

export default MovieList;
