import React from 'react'
import './BentoGrid.css'
import Capsule from '../Capsule/Capsule'
import { BsStars } from "react-icons/bs";

const BentoGrid = () => {
  return (
    <div className='bentoGrid'>
        <Capsule title="Benefits" Icon={BsStars } />
        <div className='bentoTxtBox'>
            <p className='bentoTxt'>Everything You Need to Stay Organized <br />Without Lifting a Finger</p>
            <p className='bentoTxt2'>Built for the fast-paced life of startup founders, these AI-powered features eliminate <br /> busywork and help you focus on building.</p>
        </div>
        
        <div className="bento">
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div3"></div>
            <div className="div4"></div>
            <div className="div5"></div>
        </div>
    </div>
  )
}

export default BentoGrid