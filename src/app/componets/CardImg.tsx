'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const CardImg = ({movieID, imageSrc, title, releaseDate, vote_average}) => {

  return (
    <div className='border sombra rounded-xl mt-5 flex flex-col flex-wrap movie-card w-[180px] font-sans'>
      <Link
        className='cursor-pointer hover:opacity-75'
        href={`/movies/details?key=${movieID}`}>
        <Image 
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${imageSrc}`}
          alt={`Poster Movie ${title}`}
          width={182}
          height={373}
          priority
          className='rounded-t-xl '
        />
      </Link>    
      <div className='movie-data text-lg text-copy pt-7 px-3 pb-5 relative min-w-min'>
        <div className='absolute -top-5 bottom-3 bg-slate-800 rounded-full w-10 h-10'>
          <div className=' absolute top-2 left-2 text-base text-white'> {vote_average} </div>
        </div>
        <Link
          className='text-base cursor-pointer hover:text-cyan-500'
          href={`/movies/details?key=${movieID}`}>
          <h2 className='font-bold capitalize cursor-pointer line-clamp-3'>{title}</h2>
        </Link>
        <p className="text-base text-slate-500">
          {new Date(releaseDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
      </div>
    </div>
  )
}

export default CardImg;
