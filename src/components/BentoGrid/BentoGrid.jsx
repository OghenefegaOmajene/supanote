import React from 'react'
import './BentoGrid.css'
import Capsule from '../Capsule/Capsule'
import { BsStars } from "react-icons/bs";
import bentoImg1 from '../../assets/images/bentoImg1.png'
import bentoImg4 from '../../assets/images/bentoImg4.png'
import bentoImg5 from '../../assets/images/bentoImg5.png'
import connection from '../../assets/images/connection.png'

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

            <div className="div2" id='bentoCard'>

            </div>

            <div className="div3" id='bentoCard'>
                <img src={connection} alt="" />
            </div>

            <div className="bento4" id='bentoCard'>
                <img src={bentoImg4} alt="" />
                <p className='bento4Txt1'>Goal-Oriented Task Planning</p>
                <p className='bento4Txt2'>Set your startup goals, and let the AI break them down into milestones and daily actions.</p>
            </div>

            <div className="bento5" id='bentoCard'>
                <img src={bentoImg5} alt="" />
                <p className='bento4Txt1'>Proactive Reminders</p>
                <p className='bento4Tx2'>Smart reminders surface when you’re likely to forget, and even suggest when to follow up.</p>
            </div>
        </div>
    </div>
  )
}

export default BentoGrid