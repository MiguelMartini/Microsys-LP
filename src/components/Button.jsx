import React from 'react'

const variants  = { 
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-[#E4EBFF] text-gray-800',
    transparent: 'bg-transparent text-blue-600 border-blue-600 border-2',
    danger: 'bg-red-600 text-white',
}

const sizes = {
  sm: 'w-40 h-10 text-sm',
  md: 'w-56 h-12 text-base',
  lg: 'w-72 h-14 text-lg',
}

function Button({ title, variant = 'primary', className = '', size='sm', ...props }) {

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
        ${sizes[size]}
        ${className}
      `}
    >
      {title}
    </button>
    </div>
  )
}

export default Button