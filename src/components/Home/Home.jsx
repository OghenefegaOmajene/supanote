import React from 'react'
import Button from '../Button'
import './Home.css'
import { ChevronRight } from "lucide-react";
import heroImage from '../../assets/images/heroImage.png'

const Home = () => {
  return (
    <div className='home'>
        <div className='heroTxtBox'>
            <p className='heroTxt1'>Your Notes and Tasks Are Messy... <br /> Our AI Makes Them Work for You</p>
            <p className='heroTxt2'>Organize your thoughts, track your to-dos, and get smart suggestions in one unified workspace designed for start-up founders.</p>
            <Button 
                title="Get Started" 
                Icon={ChevronRight} 
            />
        </div>
        
        <img src={heroImage} alt="" />
    </div>
  )
}

export default Home