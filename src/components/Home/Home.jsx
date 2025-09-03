import React from 'react'
import Button from '../Button'
import './Home.css'
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className='home'>
        <p className='homeTxt'>Your Notes and Tasks Are Messy... <br /> Our AI Makes Them Work for You</p>

        <p className='homeTxt2'>Organize your thoughts, track your to-dos, and get smart suggestions in one unified workspace designed for start-up founders.</p>

        <Button 
            title="Get Started" 
            Icon={ChevronRight} 
        />
    </div>
  )
}

export default Home