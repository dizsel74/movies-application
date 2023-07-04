
import SideNav from '@/app/componets/SideNav'
import TitleSection from '@/app/componets/TitleSection'
import Image from 'next/image'
import 'tailwindcss/tailwind.css';
export default function Home() {
  return (
     //<main className="flex min-h-screen items-center p-24">
    //  etilos de contenedor
    <div className='px-10 py-5 min-h-screen '> 
      <TitleSection titulo={'Popular movies'}/>
      <SideNav />
    </div>
    //</main>
    
   //<TitleSection />
   
  )
}
