
import SideNav from '@/app/componets/SideNav'
import TitleSection from '@/app/componets/TitleSection'
import Image from 'next/image'
import 'tailwindcss/tailwind.css';
export default function Home() {
  return (
     //<main className="flex min-h-screen items-center p-24">
    //  etilos de contenedor
    <main className='px-10 py-5 min-h-screen '> 
      <TitleSection titulo={'Popular movies'}/>
      <div className='flex'>
      <SideNav />
      
      <div className='movie_Card border border sombra rounded-md '>
        <div className='container_poster'>
          <div className='image_Wraper'>
            <Image />
          </div>
        </div>

        <div className='movie-data text-lg text-copy pt-7 px-2.5 pb-3'>
          <h2 className='font-bold capitalize cursor-pointer hover:text-cyan-500 break-words'>titulo</h2>
          <p className='text-slate-500'>May, 17, 2023</p>
        </div>

      </div>

    </div>
    //</main>
    
   //<TitleSection />
   
  )
}
