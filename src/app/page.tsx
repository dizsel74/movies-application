
import SideNav from '@/app/componets/SideNav'
import TitleSection from '@/app/componets/TitleSection'
import 'tailwindcss/tailwind.css';
import MovieList from './componets/MovieList';

export default async function Home() {
  
  return (

    <main className='mx-auto  min-h-screen max-w-7xl'> 
      <TitleSection titulo={'Popular movies'}/>
      <div className='flex'>
      <SideNav />

      <div className='flex flex-wrap justify-evenly gap-2 max-w-6xl'>
        <MovieList />
      </div>

    </div>
    </main>
   
  )
}
