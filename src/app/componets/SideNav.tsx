'use cliente'
import React from 'react';
import Filtros from './Filtros';


const SideNav = () => {
  return (
    <aside className='py-2 pl-2 pr-5 w-[350px] min-w-[300px] overflow-y-auto overflow-hidden'>
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