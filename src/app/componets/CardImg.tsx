'use client'
import React from 'react'
import Image from 'next/image'
// aqui
import Details from '@/app/componets/Details'
import  { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const CardImg = ({movieID, imageSrc, title, releaseDate, vote_average}) => {



  return (
    <div className='border sombra rounded-xl mt-5 flex flex-col flex-wrap movie-card max-w-min'>
      <Link
        className='cursor-pointer hover:opacity-75'
       // onClick={handleMovieClick} 
        href={`/movies/details?key=${movieID}`}
        
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
          className='cursor-pointer hover:text-cyan-500'
         // onClick={handleMovieClick(movieID)}
          href={`/movies/details?key=${movieID}`}
        >
          <h2 className='font-bold capitalize cursor-pointer line-clamp-3'>{title}</h2>
        </Link>
        <p className='text-slate-500'>{releaseDate}</p>

      </div>

    </div>
  )
}

export default CardImg;
