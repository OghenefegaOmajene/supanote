import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './sections/Home/Home'
import BentoGrid from './sections/BentoGrid/BentoGrid'
import './App.css'
import Footer from './components/Footer/Footer'
import Features from './sections/Features/Features'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='section'>
        <Home/>
        <BentoGrid/>
        <Features/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
