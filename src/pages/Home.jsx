import React from 'react'
import Header from '../features/Header/Header'
import MainSection from '../features/MainSection/MainSection'
import Recursos from '@/features/Recursos/Recursos'
import Sobre from '@/features/Sobre/Sobre'

function Home() {
  return (
    <div >
        <Header/>
        <MainSection/>
        <Recursos/>
        <Sobre/>
    </div>
  )
}

export default Home