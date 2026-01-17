import React, { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="p-4 flex items-center justify-between lg:px-40">

        {/* Logo */}
        <h1 className="text-[#2563EB] font-bold text-2xl">
          MicroSys
        </h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-gray-600">
          <p className="cursor-pointer hover:underline">Sobre</p>
          <p className="cursor-pointer hover:underline">Planos</p>
          <p className="cursor-pointer hover:underline">Equipe</p>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-black text-2xl pr-2"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="md:hidden bg-white text-gray-600 font-medium flex flex-col gap-4 p-5 border-t-2 border-gray-200">
          <p className="cursor-pointer">Sobre</p>
          <p className="cursor-pointer">Planos</p>
          <p className="cursor-pointer">Equipe</p>
        </nav>
      )}
    </header>
  )
}

export default Header
