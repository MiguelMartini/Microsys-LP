import React from 'react'

function Card({picture ,name, position, about}) {
  return (
    <div className='flex flex-col items-center bg-gray-100 rounded-2xl p-5 mt-5 w-80'>
        <div className='bg-gray-400 rounded-full overflow-hidden'>
            <img src={picture} alt={`foto de perfilde ${name}`} className='w-32 h-32'/>
        </div>
        <div className='flex flex-col items-center gap-2 mt-3'>
            <p className='text-xl font-semibold text-gray-700'>{name}</p>
            <p className='text-md font-medium text-blue-600'>{position}</p>
            <p className='text-center'>{about}</p>
        </div>
    </div>
  )
}

export default Card