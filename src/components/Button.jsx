import React from 'react'

const variants  = { 
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-[#E4EBFF] text-gray-800',
    danger: 'bg-red-600 text-white',
}

function Button({ title, variant = 'primary', className = '', ...props }) {

  return (
    <div className=''>
       <button
      {...props}
      className={`
        px-6 py-2
        rounded-md
        font-semibold
        transition
        duration-200
        hover:opacity-85
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
    >
      {title}
    </button>
    </div>
  )
}

export default Button