import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './sections/Home/Home'
import BentoGrid from './sections/BentoGrid/BentoGrid'
import './App.css'
import Footer from './components/Footer/Footer'
import Features from './sections/Features/Features'
import HowItWorks from './sections/HowItWorks/HowItWorks'
import Pricing from './sections/Pricing/Pricing'
import Testimonials from './sections/Testimonials/Testimonials'

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
        <Testimonials/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
