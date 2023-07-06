'use cliente'
import React from 'react'

const TitleSection = ({ titulo }) => {
  return (
    <div className='font-semibold text-4xl py-3 px-2 capitalize font-sans'>
      <h1>
        { titulo }
      </h1>
    </div>
  )
}

export default TitleSection