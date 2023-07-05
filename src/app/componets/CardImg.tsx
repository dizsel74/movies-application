import React from 'react'
import Image from 'next/image'

const CardImg = () => {
  return (
    <div className='border sombra rounded-xl mt-5 movie-card flex flex-col flex-wrap'>
      <div className='image_Wraper '>
        <Image 
            src="https://www.themoviedb.org/t/p/w220_and_h330_face/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt="Poster Movie"
            width={180}
            height={20}
            priority
            className='rounded-t-xl '
           />
      </div>
        
      <div className='movie-data text-lg text-copy pt-5 px-2.5 pb-3 relative'>
        <div className='absolute -top-5 bottom-3 bg-slate-800 rounded-full w-9 h-9'>
          <div className=' absolute top-1 left-2 text-base text-white'>47</div>
        </div>
        <h2 className='font-bold capitalize cursor-pointer hover:text-cyan-500 break-words'>titulo</h2>
        <p className='text-slate-500'>May, 17, 2023</p>
      </div>

      </div>
  )
}

export default CardImg;
