import React from 'react'
import {PiCaretRightBold} from 'react-icons/pi';

import{ FiltrosProps } from '@/app/types';

const Filtros: React.FC<FiltrosProps> = ({filtrarPor}) => {
  return (
    <div className='p-4 mt-3 flex items-cent er rounded-md px-4 cursor-pointer border justify-between font-sans sombra'>
      <span className='text-lg ml-0.5 text-copy font-bold capitalize'>{filtrarPor}</span>
      <PiCaretRightBold />
    </div>
  )
}

export default Filtros;