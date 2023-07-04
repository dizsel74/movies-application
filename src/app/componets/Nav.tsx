'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {FaSearch} from 'react-icons/fa';


const  nav = () => {
  const [input, setInput] = useState('')
  const router = useRouter
  // function finder(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   router.push(`?movie=${input}`);
  //   setInput('');
  // }

  return (
    


    //fixed w-full flex pt-4 pb-4 px-4
 
    <header className='bg-primary flex items-center md:px-0 h-16 text-neutral transition-top duration-200 ease-linear tracking-wider'> 
    <div className='justify-between container mx-auto flex items-center '>
      <div className='justify-start pl-10 flex items-center'>
        <Link href='/' >
          <Image
             src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
             alt="TMCLogo"
             width={150}
               height={20}
             
             priority
           />  
   
          </Link>
        <ul className='flex space-x-6 justify-center pl-4 items-center cursor-pointer font-semibold'>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
        </ul>
      </div>
    </div>
    <div className='justify-end container mx-auto flex items-center px-10'>
    <ul className='flex space-x-6 justify-center pr-4 items-center cursor-pointer font-semibold'>
      <li className='text-4xl'>+</li>
      <li className='border rounded p-1 '>EN</li>
      <li>Login</li>
      <li>Join TMDB</li>
      <li className='text-accent  '><FaSearch /></li>
        </ul>
    </div>
    </header>
    
  )
};

export default  nav;