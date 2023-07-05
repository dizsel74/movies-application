
import SideNav from '@/app/componets/SideNav'
import TitleSection from '@/app/componets/TitleSection'
import Image from 'next/image'

import 'tailwindcss/tailwind.css';
import CardImg from './componets/CardImg';

export default function Home() {
  return (
     //<main className="flex min-h-screen items-center p-24">
    //  etilos de contenedor

    //px-10 py-5
    <main className='mx-auto  min-h-screen max-w-7xl'> 
      <TitleSection titulo={'Popular movies'}/>
      <div className='flex'>
      <SideNav />
        <div className=' flex flex-wrap gap-2 max-w-6xl'>

        <CardImg />
        <CardImg />
        <CardImg />
        <CardImg />
        <CardImg />
        <CardImg />
        <CardImg />
        <CardImg />
        <CardImg />
        </div>
      

    </div>
    //</main>
    
   //<TitleSection />
   
  )
}
