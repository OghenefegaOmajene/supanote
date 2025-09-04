import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import BentoGrid from './components/BentoGrid/BentoGrid'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <BentoGrid/>
    </>
  )
}

export default App
