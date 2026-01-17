import React from 'react'

function MainSection() {
  return (
    <div className='bg-[#E4EBFF] px-5 py-10'>
      <div className='flex flex-col items-center'>
        <p className='text-2xl font-bold text-gray-700'>Bem-vindo ao <spam className='text-[#2563EB] '>MicroSys</spam></p>
        <p className='text-lg text-gray-600'>A gestão do seu negócio, simplificada</p>
      </div>
      <div className='my-5 flex justify-center'>
        <p className='text-gray-600 font-normal text-justify indent-4'>O MicroSys é um sistema para apoio de pequenos e médios empreendedores, com auxílio de agentes de Inteligência Artificial para tomadas de decisões</p>
      </div>
    </div>
  )
}

export default MainSection