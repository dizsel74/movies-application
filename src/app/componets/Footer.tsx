'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer= () => {

  return (
    <div className='bg-primary font-sans'>
        <footer className='flex items-center py-10  text-neutral transition-top duration-200 ease-linear mx-auto max-w-4xl'> 
          <div className='justify-between container mx-auto flex items-start pl-2'>
        
            <div className='justify-start  flex items-center'>
              <Link href='/' >
                <Image
                  src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
                  alt="TMCLogo"
                  width={150}
                  height={20}
                  priority
                />  
              </Link>
              </div>
              <div className='flex flex-col pl-10'>
                <h3 className='font-bold pb-2'>TITLE</h3>
                <ul className=' cursor-pointer'>
                  <li>About TMDB</li>
                  <li>Contact</li>
                  <li>Forum</li>
                  <li>API</li>
                  <li>System</li>
                </ul>
              </div>
              <div className='flex flex-col pl-10'>
                <h3 className='font-bold pb-2'>TITLE</h3>
                <ul className='cursor-pointer'> 
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                </ul>
              </div>
              <div className='flex flex-col pl-10'>
               <h3 className='font-bold pb-2'>TITLE</h3>
                <ul className='cursor-pointer'> 
                  <li>TV Shows</li>
                  <li>People</li>
                  <li>More</li>
                </ul>
              </div>
              <div className='flex flex-col pl-10'>
                <h3 className='font-bold pb-2'>TITLE</h3>
                <ul className='cursor-pointer'> 
                  <li>TV Shows</li>
                  <li>People</li>
                  <li>More</li>
                </ul>
              </div>
            
          </div>
          
        </footer>
    </div>  
  )
};

export default Footer;