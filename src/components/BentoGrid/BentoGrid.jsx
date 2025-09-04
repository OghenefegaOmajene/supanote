import React from 'react'
import './BentoGrid.css'
import Capsule from '../Capsule/Capsule'
import { BsStars } from "react-icons/bs";
import bentoImg1 from '../../assets/images/bentoImg1.png'
import bentoSearch from '../../assets/images/bentoImg4.png'

const BentoGrid = () => {
  return (
    <div className='bentoGrid'>
        <Capsule title="Benefits" Icon={BsStars } />
        <div className='bentoTxtBox'>
            <p className='bentoTxt'>Everything You Need to Stay Organized <br />Without Lifting a Finger</p>
            <p className='bentoTxt2'>Built for the fast-paced life of startup founders, these AI-powered features eliminate <br /> busywork and help you focus on building.</p>
        </div>
        
        <div className="bento">

            <div className="bento1" id='bentoCard'>
                <div className="bento1Txt">
                    <p id='primaryBentoTxt'>Note-to-Task AI</p>
                    <p id='secBentoTxt'>Automatically convert meeting notes, ideas, or brain dumps into <br /> actionable to-dos with AI.</p>
                </div>
                <img src={bentoImg1} alt="" />
            </div>

            <div className="div2" id='bentoCard'></div>
            <div className="div3" id='bentoCard'></div>

            <div className="bento4" id='bentoCard'>
                <img src={bentoSearch} alt="" />
                <p>Goal-Oriented Task Planning</p>
                <p>Set your startup goals, and let the AI break them down into milestones and daily actions.</p>
            </div>
            <div className="div5" id='bentoCard'></div>
        </div>
    </div>
  )
}

export default BentoGrid