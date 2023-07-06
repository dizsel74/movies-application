'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import {FaSearch, FaBars} from 'react-icons/fa';

const  Nav = () => {

  // code for the dropdonw
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className='bg-primary font-sans'>
        <header className='flex items-center md:px-0 h-16 text-neutral transition-top duration-200 ease-linear mx-auto max-w-7xl'> 
          <div className='justify-between container mx-auto flex items-center pl-2'>
        
            <div className='justify-start  flex items-center'>
              <Link href='/' >
                <Image
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="TMCLogo"
                  width={150}
                  height={20}
                  priority
                />  
              </Link>
              <ul className='flex space-x-6 justify-center pl-4 items-center cursor-pointer font-semibold z-10'>
                <li>
                  <span
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='relative'
                  >Movies
                    {showDropdown && (
                      <ul
                        className='absolute bg-white py-1 rounded shadow-lg text-copy capitalize'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <li className='px-4 py-2 hover:bg-gray-200'>Upcoming</li>
                        <li className='px-4 py-2 hover:bg-gray-200'>Popular</li>
                        <li className='px-4 py-2 hover:bg-gray-200'>Top rated</li>
                      </ul>
                    )}
                  </span>
                </li>
                <li>TV Shows</li>
                <li>People</li>
                <li>More</li>
              </ul>
            </div>
          </div>
          <div className='justify-end container mx-auto flex items-center '>
            <ul className='flex space-x-6 justify-center pr-4 items-center cursor-pointer font-semibold'>
              <li className='text-4xl'>+</li>
              <li className='border rounded p-1 '>EN</li>
              <li className=''>Login</li>
              <li className=''>Join TMDB</li>
              <li className=' text-accent'><FaSearch /></li>
            </ul>
          </div>
        </header>
    </div>  
  )
};

export default Nav;