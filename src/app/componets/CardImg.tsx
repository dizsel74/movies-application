'use client'
import React from 'react'
import Image from 'next/image'
// aqui
import  { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// aqui


const CardImg = () => {
// aqui
const [imageSrc, setImageSrc] = useState('');
const [movieTitle, setMovieTitle] = useState('');
const [popularityValue, setPopularityValue] = useState('');
const [releaseDate, setReleaseDate] = useState('');
//const router = useRouter();

useEffect(() => {
  const fetchMovieImage = async () => {
    try {
      const movieTitle = 'X-men'; // Título de la película
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=37c25cc13aeb0ec14911a45f19e35079&query=${encodeURIComponent(movieTitle)}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const movie = data.results[0];
        //console.log(movie);
        setImageSrc(movie.poster_path);
        setMovieTitle(movie.title);
        setPopularityValue(Math.round(movie.popularity));
        const releaseDateString = new Date(movie.release_date);
          const formattedReleaseDate = releaseDateString.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });
          setReleaseDate(formattedReleaseDate);
        // setReleaseDate(Date(movie.release_date));
      }
    } catch (error) {
      console.error('Error al obtener la imagen de la película:', error);
    }
  };

  fetchMovieImage();
}, []);

const handleMovieClick = () => {
 console.log ('ir a pagina');
 
 // router.push('/detalle-pelicula'); // Reemplaza '/detalle-pelicula' con la ruta correcta a la página de detalles
};
// aqui
  return (
    <div className='border sombra rounded-xl mt-5 flex flex-col flex-wrap movie-card'>
      <a onClick={handleMovieClick} className='cursor-pointer hover:opacity-75'>
        <Image 
            // src="https://www.themoviedb.org/t/p/w220_and_h330_face/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${imageSrc}`}
            /////////////////
            alt="Poster Movie"
            width={180}
            height={20}
            priority
            className='rounded-t-xl min-w-min'
           />
      </a>
        
      <div className='movie-data text-lg text-copy pt-7 px-3 pb-5 relative min-w-min'>
        <div className='absolute -top-5 bottom-3 bg-slate-800 rounded-full w-9 h-9'>
          <div className=' absolute top-1 left-2 text-base text-white'>{popularityValue}</div>
          //47
        </div>
        {/* <h2 className='font-bold capitalize cursor-pointer hover:text-cyan-500 break-words'>Spider-Man: vvvvv</h2> 
        <p className='text-slate-500'>May, 17, 2023</p>*/}
        <a onClick={handleMovieClick}>
          <h2 className='font-bold capitalize cursor-pointer hover:text-cyan-500 break-words'>{movieTitle}</h2>
        </a>
        <p className='text-slate-500'>{releaseDate}</p>
      </div>

      </div>
  )
}

export default CardImg;
