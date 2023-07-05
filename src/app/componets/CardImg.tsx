'use client'
import React from 'react'
import Image from 'next/image'
// aqui
import  { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// aqui


const CardImg = ({key, imageSrc,title, releaseDate, vote_average}) => {
// aqui
// const [imageSrc, setImageSrc] = useState('');
// const [movieTitle, setMovieTitle] = useState('');
// const [popularityValue, setPopularityValue] = useState('');
// const [releaseDate, setReleaseDate] = useState('');
//const router = useRouter();
const API_KEY = '37c25cc13aeb0ec14911a45f19e35079';
//const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


// useEffect(() => {
//   const fetchMovieImage = async () => {
//     try {
//       const movieTitle = 'Roma'; // Título de la película
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}`
//       );
//       const data = await response.json();

//       if (data.results && data.results.length > 0) {
//         const movie = data.results[0];
//         //console.log(movie);
//         setImageSrc(movie.poster_path);
//         setMovieTitle(movie.title);
//         setPopularityValue(Math.round(movie.popularity));
        
//         const releaseDateString = new Date(movie.release_date);
//           const formattedReleaseDate = releaseDateString.toLocaleString('en-US', {
//             month: 'short',
//             day: 'numeric',
//             year: 'numeric',
//           });
//         setReleaseDate(formattedReleaseDate);
//       }
//     } catch (error) {
//       console.error('Error al obtener la imagen de la película:', error);
//     }
//   };

//   fetchMovieImage();
// }, []);

const handleMovieClick = () => {
 console.log ('ir a pagina');

 // router.push('/detalle-pelicula'); // Reemplaza '/detalle-pelicula' con la ruta correcta a la página de detalles
};


// aqui
  return (
    <div className='border sombra rounded-xl mt-5 flex flex-col flex-wrap movie-card'>
      <Link
        className='cursor-pointer hover:opacity-75'
        onClick={handleMovieClick} 
        href='/movies/details'
        >
        <Image 
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${imageSrc}`}
          alt="Poster Movie"
          width={180}
          height={20}
          priority
          className='rounded-t-xl min-w-min'
        />
      </Link>
        
      <div className='movie-data text-lg text-copy pt-7 px-3 pb-5 relative min-w-min'>

        <div className='absolute -top-5 bottom-3 bg-slate-800 rounded-full w-10 h-10'>
          <div className=' absolute top-2 left-2 text-base text-white'> {vote_average} </div>
        </div>

        <Link
          className='cursor-pointer hover:text-cyan-500 break-words'
          onClick={handleMovieClick}
          href='/movies/details'
        >
          <h2 className='font-bold capitalize cursor-pointer'>{title}</h2>
        </Link>

        <p className='text-slate-500'>{releaseDate}</p>

      </div>

    </div>
  )
}

export default CardImg;
