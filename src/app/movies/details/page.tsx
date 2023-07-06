'use client'
import React from 'react'
import TitleSection from '@/app/componets/TitleSection'
import Image from 'next/image'
import  { useEffect, useState } from 'react';
import Link from 'next/link'
import { TbPointFilled } from 'react-icons/tb';
import { BsFillPlayFill, BsFillHeartFill, BsBookmarkFill, BsStarFill, BsListStars } from 'react-icons/bs';

const DetailsPage = ( ) => {
 
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  const values = urlParams.values()
  let idPeli; 

  for (const value of values) {
    idPeli = value; // Asigna cada valor a la variable idPeli
  }
 
const [movieDetails, setMovieDetails] = useState(null);

useEffect(() => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const movieId = idPeli;
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
}, [idPeli]);



  return (
    <div className='min-h-screen'> 
      {movieDetails ? (
        <div className='min-h-screen w-full h-full'>
          <TitleSection titulo=''/>
  
        <div 
        className='border-b border-black'
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path})`,backgroundSize: 'cover',
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',}}>
          <div className='flex justify-center flex-wrap' 
          style={{ backgroundImage:
      'linear-gradient(to right, rgba(52.5, 52.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(52.5, 52.5, 52.5, 0.84) 50%, rgba(52.5, 52.5, 52.5, 0.84) 100%)'}}>
          
            <div className='grid-cols-1 p-10 flex'>
              <section className='flex flex-wrap text-white box-border'>
                <div className='w-[300px] h-[450px] min-w-[300px] rounded-lg  overflow-hidden'>
                  <div className='w-[300px] h-[450px] min-w-[300px] relative top-0 left-0 block'>
                    <div className=' w-full h-full min-w-full'>
                      <Image 
                      src={`https://image.tmdb.org/t/p/w300_and_h450_face/${movieDetails.poster_path}`}
                      alt="Backdrop"
                      width={300}
                      height={450}
                      priority
                      className='w-full h-full min-w-full sombra' /> 
                    </div>
                  </div>
                </div>
              </section>
              <div className='flex falses'>
                <section className='flex flex-wrap items-start content-center text-white box-border pl-10'>
                  <div className='w-full mb-6 flex flex-wrap'>
                    <h2 className='w-full text-4xl font-bold'>
                        <Link href='#'>{movieDetails.title}</Link>
                        &nbsp;<span className='font-thin'>(
                          {new Date(movieDetails.release_date).toLocaleDateString('en-US',{
                            year: 'numeric',
                          })}
                          )</span>
                    </h2>
                    <div className='flex text-xs mb-6 w-full pt-2'>
                      <span className='border border-gray-50 rounded-sm mr-2 px-1'>PG-13</span>
                      <span className=''>{movieDetails.release_date}</span>
                      <span className='pl-4'>
                        <TbPointFilled className='inline'/>&nbsp;
                        {movieDetails.genres.map((genre) => (
                        <span key={genre.id}>{genre.name}, &nbsp;</span> ))}
                        </span>
                      <span className=''>
                        <TbPointFilled className='inline pr'/>&nbsp;
                        {movieDetails.vote_count}
                        </span>
                    </div>
                    <div>

                    <ul className='flex w-full justify-start items-center h-[68px]'>
                    <li className='mr-5 flex'>
                      <div className='bg-sky-950 rounded-full w-12 h-12 mr-4 relative'>
                        <div className=' text-lg text-white absolute top-2.5 left-2.5'>   {movieDetails.vote_average.toFixed(1)}</div>
                      </div>
                      <div className='text-xs font-semibold'>
                        Puntuación <br />por <br />usuario
                      </div>
                    </li>
                    <li className='mr-5'>
                      <div className='bg-sky-900 rounded-full w-10 h-10 relative'>
                        <div className=' text-base text-white absolute top-2 left-3'>
                          <BsListStars className='inline'/>  
                        </div>
                      </div>
                    </li>
                    <li className='mr-5'>
                      <div className='bg-sky-900 rounded-full w-10 h-10 relative'>
                        <div className=' text-base text-white absolute top-2 left-3'>
                          <BsFillHeartFill className='inline'/>  
                        </div>
                      </div>
                    </li>
                    <li className='mr-5'>
                      <div className='bg-sky-900 rounded-full w-10 h-10 relative'>
                        <div className=' text-base text-white absolute top-2 left-3'>  
                        <BsBookmarkFill className='inline'/>  
                        </div>
                      </div>
                    </li>
                    <li className='mr-5'>
                      <div className='bg-sky-900 rounded-full w-10 h-10 relative'>
                        <div className=' text-base text-white absolute top-2 left-3'>
                        <BsStarFill className='inline'/>  
                        </div>
                      </div>
                    </li>
                    <li>
                      <BsFillPlayFill className='inline mr-2'/>Play Trailer
                    </li>
                    </ul>
                  </div>
                  </div>
                  <div className='w-full '>
                    <h3 className='italic font-normal opacity-60 mb-2'>{movieDetails.tagline}</h3>
                    <h3 className='font-semibold text-xl capitalize mt-2.5 mb-2 '>Resumen</h3>
                    <p className='mt-2.5'> {movieDetails.overview}</p>
                    <div className=' w-full '>
                      <ol className=' flex flex-wrap justify-start mt-5 reltive top-0 left-0'>
                        <li className='min-w-[140px] w-2/6 pt-5'>
                          <p className='font-semibold'>Nombre</p>
                          <p className='text-sm'>Cargo</p>
                        </li>
                        <li className='min-w-[140px] w-2/6 pt-5'>
                          <p className='font-semibold'>Nombre</p>
                          <p className='text-sm'>Cargo</p>
                        </li>
                        <li className='min-w-[140px] w-2/6 pt-5'>
                          <p className='font-semibold'>Nombre</p>
                          <p className='text-sm'>Cargo</p>
                        </li>
                        <li className='min-w-[140px] w-2/6 pt-5'>
                          <p className='font-semibold'>Nombre</p>
                          <p className='text-sm'>Cargo</p>
                        </li>
                      </ol>
                    </div>

                  </div>

                </section>
              </div>
            </div>

         </div>
       </div>


        </div>
      ) : (
        <p>Loading...</p>
      )}
   
        
    </div>

  )
}

export default DetailsPage 