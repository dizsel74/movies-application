'use client'
import React from 'react';
import Image from 'next/image';
import  { useEffect, useState } from 'react';
import Link from 'next/link';
import { TbPointFilled } from 'react-icons/tb';
import { BsFillPlayFill, BsFillHeartFill, BsBookmarkFill, BsStarFill, BsListStars } from 'react-icons/bs';

import { MovieDetails } from '@/app/types';

const DetailsPage: React.FC = ( ) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const TOKEN_ACCES='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MyNWNjMTNhZWIwZWMxNDkxMWE0NWYxOWUzNTA3OSIsInN1YiI6IjY0YTRmMGU0YTBiZTI4MDBjYmY2MjQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96i3JKk4jHwXJS70xjZgyLBjxOATbAJDHGotwTGZ7gc';

  useEffect(() => {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    const values = Array.from(urlParams.values());
    let idPeli: string ='';

    for (const value of values) {
      idPeli = value; 
    }

    const fetchMovieDetails = async () => {
      try{ 
        const baseUrl = 'https://api.themoviedb.org/3/movie/';
        const movieId = idPeli;
        const language = 'en-US';
        const url = `${baseUrl}${movieId}?language=${language}`;

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: TOKEN_ACCES
          }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        setMovieDetails(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieDetails();
  }, []);



  return (
    <div className='min-h-screen font-sans'> 
      {movieDetails ? (
        <div className='min-h-screen w-full h-full'>
          <div className='pb-2 pt-3'>
            <ul className='flex justify-center aling-center'>
              <li className='pl-10'>
                <span className='border-b-4 border-sky-400'>General View</span>
              </li>
              <li className='pl-10 cursor-pointer'>
                <span className='hover:border-b-4 hover: border-sky-400'>Multimedia</span>
              </li>
              <li className='pl-10 cursor-pointer'>
                <span className='hover:border-b-4 hover: border-sky-400'>Fandom </span>
              </li>
              <li className='pl-10 cursor-pointer'>
                <span className='hover:border-b-4 hover: border-sky-400'>Share</span>
              </li>
            </ul>
          </div>
        <div 
        className='border-b border-black'
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path})`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left calc((50vw - 170px) - 340px) top',}}>
          <div className='flex justify-center flex-wrap' 
          style={{ backgroundImage:
      'linear-gradient(to right, rgba(52.5, 52.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(52.5, 52.5, 52.5, .84) 50%, rgba(52.5, 52.5, 52.5, 0.84) 100%)'}}>
          
            <div className='grid-cols-1 px-2 py-10 flex mx-auto max-w-screen-xl'>
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
                    <div className='flex text-sm mb-6 w-full pt-2 '>
                      <span className='border border-gray-50 rounded-sm mr-2 px-0.5'>PG-13</span>
                      <span className=''>{movieDetails.release_date}</span>
                      <span className='pl-1'>
                        <TbPointFilled className='inline'/>&nbsp;
                             {movieDetails.genres ? (
                              movieDetails.genres.map((genre, index) => (
                                <span key={genre.id} className='px-2'>
                                  {genre.name}
                                  {index !== movieDetails.genres.length - 1 && ', '}
                                </span>
                              ))) : (<span>Loading genres...</span>)
                            }
                      </span>
                      <span className='px-1'>
                        <TbPointFilled className='inline'/>&nbsp;
                        {movieDetails.vote_count}
                        </span>
                    </div>
                    <div>

                    <ul className='flex w-full justify-start items-center h-[68px]'>
                    <li className='mr-5 flex'>
                      <div className='bg-sky-950 rounded-full w-12 h-12 mr-4 relative'>
                        <div className=' text-lg text-white absolute top-2.5 left-2.5'>   
                        {movieDetails.vote_average ? movieDetails.vote_average.toFixed(1) : 'N/A'}
                        </div>
                      </div>
                      <div className='text-mb font-semibold'>
                        User<br />rating
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
                          <p className='font-semibold'>Name</p>
                          <p className='text-sm'>Position</p>
                        </li>
                        <li className='min-w-[140px] w-2/6 pt-5'>
                          <p className='font-semibold'>Name</p>
                          <p className='text-sm'>Position</p>
                        </li>
                        <li className='min-w-[140px] w-2/6 pt-5'>
                          <p className='font-semibold'>Name</p>
                          <p className='text-sm'>Position</p>
                        </li>
                        <li className='min-w-[140px] w-2/6 pt-5'>
                          <p className='font-semibold'>Name</p>
                          <p className='text-sm'>Position</p>
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

export default DetailsPage;