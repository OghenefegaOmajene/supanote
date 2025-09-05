import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './sections/Home/Home'
import BentoGrid from './sections/BentoGrid/BentoGrid'
import './App.css'
import Footer from './components/Footer/Footer'
import Features from './sections/Features/Features'
import HowItWorks from './sections/HowItWorks/HowItWorks'
import Pricing from './sections/Pricing/Pricing'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='section'>
        <Home/>
        <BentoGrid/>
        <Features/>
        <HowItWorks/>
        <Pricing/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
