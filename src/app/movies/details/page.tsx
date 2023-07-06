'use client'
import React from 'react'
import Details from '@/app/componets/Details'
import TitleSection from '@/app/componets/TitleSection'
import Image from 'next/image'
import  { useEffect, useState } from 'react';
import Link from 'next/link'
const DetailsPage = ( ) => {
  // const DetailsPage = ( {params} ) => {
  const valores = window.location.search;
  //console.log('el valor es '+valores);

  //Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var producto = urlParams.get('key');

const

  values = urlParams.values()
  

let idPeli; // Declaración de la variable idPeli

for (const value of values) {
  idPeli = value; // Asigna cada valor a la variable idPeli
}

console.log(idPeli); // Imprime cada valor
 
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
    {/* <div className='mx-auto min-h-screen max-w-7xl'>  */}
      {movieDetails ? (
        <div className='min-h-screen w-full h-full'>
          <TitleSection titulo={movieDetails.title}/>
          {/* <h2>{movieDetails.title}</h2> */}

          {/* <Image 
          src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path}`}
          alt="Backdrop"
          width={1920}
          height={800}
          priority
          className='border-b border-black '
        /> */}
        <div 
        className='border-b border-black header'
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path})`,backgroundSize: 'cover',
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',}}>
          <div className='flex justify-center flex-wrap bg-gradient-to-r from-black via-black-00 to-gray-00 keybprd'>
          
            <div className='grid-cols-1 p-10 flex border-2 border-orange-600 singlecolum'>
              <section className='flex flex-wrap text-white box-border  border-2 border-green-600 originslheder'>
                <div className='w-[300px] h-[450px] min-w-[300px] rounded-lg  overflow-hidden border-2 border-blue-600 poster-wraper'>
                  <div className='w-[300px] h-[450px] min-w-[300px] relative top-0 left-0 block poster'>
                    <div className=' w-full h-full min-w-full img-poster'>
                      <Image 
                      src={`https://image.tmdb.org/t/p/w300_and_h450_face/${movieDetails.backdrop_path}`}
                      alt="Backdrop"
                      width={300}
                      height={450}
                      priority
                      className='w-full h-full min-w-full' /> 
                    </div>
                  </div>
                </div>
              </section>
              <div className='flex falses'>
                <section className='flex flex-wrap items-start content-center text-white box-border pl-10 border-2 border-pink-600 header'>
                  <div className='w-full mb-6 flex flex-wrap ott-flse'>
                    <h2 className='w-full text-4xl font-semibold'>
                        <Link href='#' className=''>{movieDetails.title}</Link>
                        &nbsp;<span className='font-thin'>({movieDetails.release_date})</span>
                    </h2>
                  </div>
                  <div className=''></div>

                </section>
              </div>
            </div>

         </div>
       </div>




{/* https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg */}


        </div>
      ) : (
        <p>Loading...</p>
      )}
   
        
    </div>

  )
}

export default DetailsPage 