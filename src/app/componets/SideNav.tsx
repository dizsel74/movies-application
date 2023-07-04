'use cliente'
import React from 'react';
import {PiCaretRightBold} from 'react-icons/pi';
import Filtros from './Filtros';


const SideNav = () => {
  return (
    <aside className='p-2 w-[300px] overflow-y-auto'>
      <Filtros filtrarPor={'sort'}/>
      <Filtros filtrarPor={'where to watch'}/>
      <Filtros filtrarPor={'filters'}/>
      <button
        className='bg-gray-200 p-3 mt-7 flex items-center justify-center rounded-full cursor-pointer w-full text-xl text-slate-400 font-semibold'>
        Search
      </button>
    </aside>
  )
}

export default SideNav;