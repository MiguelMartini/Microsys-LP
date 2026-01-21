import RecursosCard from '@/components/RecursosCard'
import React from 'react'
import { Users, BrainCircuit, ChartColumnDecreasing, ShieldCheck } from 'lucide-react';

function Recursos() {
  return (
    <div className='p-4 my-6 lg:px-40'>
        <div className='flex items-center flex-col'>
         <p className='text-3xl font-bold text-gray-600' id='recursos'>Recursos</p>
         <p className='font-normal'>Recursos poderosos para o seu negócio</p>
         <div className='mt-4
         lg:flex'
         >
            <RecursosCard icon={<Users className="text-gray-600 w-8 h-8"/>} title={"Gestão Completa"} desc={"Cadastro de empresa, produtos e controle de vendas em um só lugar"}/>
            <RecursosCard icon={<BrainCircuit className="text-gray-600 w-8 h-8"/>} title={"Assistente IA"} desc={"Inteligência artificial para otimizar decisões e maximizar lucros"}/>
            <RecursosCard icon={<ChartColumnDecreasing className="text-gray-600 w-8 h-8"/>} title={"Análise de Dados"} desc={"Relatórios inteligentes para acompanhar o crescimento do seu negócio"}/>
            <RecursosCard icon={<ShieldCheck className="text-gray-600 w-8 h-8"/>} title={"Segurança Total"} desc={"Seus dados protegidos com criptografia de nível empresarial"}/>
         </div>
        </div>
    </div>
  )
}

export default Recursos