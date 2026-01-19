import React from 'react'


function RecursosCard({icon ,title, desc}) {
  return (
    <div className='flex flex-col mx-10 p-2 items-center text-center'>
        <span className='pt-2'>{icon}</span>
        <p className='text-xl font-semibold text-blue-600 mb-2'>{title}</p>
        <p className='font-medium text-gray-600'>{desc}</p>
    </div>
  )
}

export default RecursosCard