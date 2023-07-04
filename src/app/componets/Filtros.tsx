import React from 'react'
import {PiCaretRightBold} from 'react-icons/pi';

const Filtros = ({filtrarPor}) => {
  return (
    <div className='p-4 mt-3 flex items-center rounded-md px-4 cursor-pointer border justify-between drop-shadow-md'>
        <span className='text-lg ml-0.5 text-copy font-bold capitalize'>{filtrarPor}</span>
        <PiCaretRightBold />
      </div>
  )
}

export default Filtros;