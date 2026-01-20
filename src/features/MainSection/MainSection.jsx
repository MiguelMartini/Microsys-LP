import Button from '@/components/Button'
import React from 'react'
import { toast } from "sonner"

function MainSection() {
  return (
    <div className='bg-[#E4EBFF] px-5 py-15 lg:py-30'>
      <div className='flex flex-col items-center'>
        <p className='text-center text-4xl font-bold text-gray-800 lg:text-6xl'>Bem-vindo ao <span className='text-[#2563EB] '>MicroSys</span></p>
        <p className='text-lg font-medium text-gray-700 mt-2 lg:text-xl'>A gestão do seu negócio, simplificada</p>
      </div>
      <div className='my-5 flex justify-center'>
        <p className='text-gray-600 font-normal text-justify indent-4'>O MicroSys é um sistema para apoio de pequenos e médios empreendedores, com auxílio de agentes de Inteligência Artificial para tomadas de decisões</p>
      </div>
      <div className='flex flex-col gap-4 mt-6 items-center md:flex-row md:justify-center'>
        <Button title={"Começar Grátis"} variant='transparent' size='lg' onClick={() => toast.warning("Entre em Contato")}/>
        <Button title={"Ver Demonstração"} size='lg' onClick={() => toast.warning("Em construção")}/>
      </div>
    </div>
  )
}

export default MainSection