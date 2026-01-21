import React from 'react'
import Header from '../features/Header/Header'
import MainSection from '../features/MainSection/MainSection'
import Recursos from '@/features/Recursos/Recursos'
import Sobre from '@/features/Sobre/Sobre'
import Equipe from '@/features/Equipe/Equipe'

function Home() {
  return (
    <div >
        <Header/>
        <MainSection/>
        <Recursos/>
        <Sobre/>
        <Equipe/>
    </div>
  )
}

export default Home