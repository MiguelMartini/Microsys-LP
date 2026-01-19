import React from 'react'
import Header from '../features/Header/Header'
import MainSection from '../features/MainSection/MainSection'
import Recursos from '@/features/Recursos/Recursos'

function Home() {
  return (
    <div >
        <Header/>
        <MainSection/>
        <Recursos/>
    </div>
  )
}

export default Home