'use client'
import React from 'react'
import  { useEffect, useState } from 'react';

import CardImg from '@/app/componets/CardImg';
import SideNav from '@/app/componets/SideNav';
import TitleSection from '@/app/componets/TitleSection';

const Upcomming = ( ) => {
  const [movies, setMovies] = useState([]);
  const API_KEY = '37c25cc13aeb0ec14911a45f19e35079';
  //const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setMovies(data.results);
          //console.log(data.results);
        }
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='mx-auto  min-h-screen max-w-7xl'>
      <TitleSection titulo={'Upcoming Movies'}/>
      <div className='flex '>
        <SideNav />
        <div className='flex flex-wrap justify-evenly gap-2 max-w-6xl pb-10'>
          {movies.map((movie) => (
            <CardImg
            movieID={movie.id}
            imageSrc={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            title={movie.title}
            releaseDate={movie.release_date}
            vote_average={movie.vote_average}
            /> 
            ))}
        </div>
      </div>
    </div >
  );
};

export default Upcomming;
