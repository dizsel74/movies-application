
import SideNav from '@/app/componets/SideNav'
import TitleSection from '@/app/componets/TitleSection'
import Image from 'next/image'

import 'tailwindcss/tailwind.css';
import CardImg from './componets/CardImg';
import { getTrendingMovies } from './calls/calls'
import MovieList from './componets/MovieList';

export default async function Home() {
  const movie = await getTrendingMovies();
  return (

   
     //<main className="flex min-h-screen items-center p-24">
    //  etilos de contenedor

    //px-10 py-5
    <main className='mx-auto  min-h-screen max-w-7xl'> 
      <TitleSection titulo={'Popular movies'}/>
      <div className='flex'>
      <SideNav />

      <div className='flex flex-wrap justify-evenly gap-2 max-w-6xl'>
        <MovieList></MovieList>
      </div>
{/* 
        <div className='flex flex-wrap justify-evenly gap-2 max-w-6xl'>
        <CardImg />
        <CardImg />
        <CardImg />
        
        </div> */}
      
        {/* <div className='flex flex-wrap justify-evenly gap-2 max-w-6xl'>
        {movie.map(movie => {
          return <CardImg />
        })}
      </div> */}
    </div>
    </main>
   
  )
}
