'use client'
import React from 'react'
import  { useEffect, useState } from 'react';


import CardImg from '@/app/componets/CardImg';
import SideNav from '@/app/componets/SideNav';
import TitleSection from '@/app/componets/TitleSection';

import { Movie } from '@/app/types';

const Toprated: React.FC = ( ) => {
 
  const [movies, setMovies] = useState<Movie[]>([]);
  const TOKEN_ACCES='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MyNWNjMTNhZWIwZWMxNDkxMWE0NWYxOWUzNTA3OSIsInN1YiI6IjY0YTRmMGU0YTBiZTI4MDBjYmY2MjQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96i3JKk4jHwXJS70xjZgyLBjxOATbAJDHGotwTGZ7gc';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: TOKEN_ACCES
          }
        };

        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='mx-auto  min-h-screen max-w-7xl'>
      <TitleSection titulo={'Top Rated Movies'}/>
      <div className='flex '>
        <SideNav />
        <div className='flex flex-wrap justify-evenly gap-2 max-w-6xl pb-10'>
          {movies.map((movie) => (
            <CardImg
            key={movie.id}
            imageSrc={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            title={movie.title}
            releaseDate={movie.release_date}
            vote_average={movie.vote_average}
            myID={movie.id} 
            /> 
            ))}
        </div>
      </div>
    </div >
  );
};

export default Toprated;
