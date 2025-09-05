import React from 'react'
import './BentoGrid.css'
import Capsule from '../../components/Capsule/Capsule'
import { BsStars } from "react-icons/bs";
import bentoImg1 from '../../assets/images/bentoImg1.png'
import bentoImg4 from '../../assets/images/bentoImg4.png'
import bentoImg5 from '../../assets/images/bentoImg5.png'
import connection from '../../assets/images/connection.png'
import summary1 from '../../assets/images/summary1.png'
import summary2 from '../../assets/images/summary2.png'

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

            <div className="bento2" id='bentoCard'>
                <div className="bento3Txt">
                    <p className='bento4Txt1'>Daily Smart Summaries</p>
                    <p className='bento4Txt2'>Wake up to a smart summary of what’s on your plate — tasks, priorities, and helpful suggestions.</p>
                </div>
                <img src={summary1} alt="" className='summary1'/>
                <img src={summary2} alt="" className='summary2'/>
            </div>

            <div className="bento3" id='bentoCard'>
                <div className="bento3Txt">
                    <p className='bento4Txt1'>Context-Aware Linking</p>
                    <p className='bento4Txt2'>AI detects and links related notes and tasks across your workspace, keeping everything connected.</p>
                </div>
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
                <p className='bento4Txt2'>Smart reminders surface when you’re likely to forget, and even suggest when to follow up.</p>
            </div>
        </div>
    </div>
  )
}

export default BentoGrid