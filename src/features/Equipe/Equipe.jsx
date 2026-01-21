import React from 'react'
import Card from './Card'
import miguel from "../../assets/miguel.jpg"
import lais from "../../assets/lais.jpg"
import vinicius from "../../assets/vinicius.jpg"


function Equipe() {
  return (
    <div className='py-12 px-4 lg:px-20'>
        <div className='flex flex-col items-center gap-2 mb-8'>
           <p className='text-gray-600 text-3xl font-bold' id='equipe'>Nossa Equipe</p> 
          <p>Profissionais que fazem o MicroSys ser uma realidade</p>
        </div>
        <div className='flex flex-col items-center md:flex md:flex-row md:justify-center md:gap-8'>
            <Card picture={miguel} name={"Miguel Martini"} position={"CTO & Desenvolvedor"} about={"Analista e Desenvolvedor de Sistemas pelo Centro Universitário SENAC. Fundador, Desenvolvedor Full-Stack e Q.A do MicroSys"} />
            <Card picture={vinicius} name={"Vinicius Gonçalves"} position={"CEO & Desenvolvedor"} about={"Graduando em Ciência da Computação pelo IFSC. Desenvolvedor e analista Full-Stack do MicroSys"} />
            <Card picture={lais} name={"Lais Varela"} position={"Fundadora & Desenvolvedora"} about={"Graduando em Ciência da Computação pelo IFSC. Desenvolvedora Full-Stack do MicroSys"} />
        </div>
    </div>
  )
}

export default Equipe