import React from 'react'
import './Features.css'
import Capsule from '../Capsule/Capsule'
import { BsStars } from "react-icons/bs";
import feature1 from '../../assets/images/feature1.png'
import feature2 from '../../assets/images/feature2.png'
import feature3 from '../../assets/images/feature3.png'

const Features = () => {
  return (
    <div className='features'>
        <Capsule title="Features" Icon={BsStars } />
        <div className='bentoTxtBox'>
            <p className='bentoTxt'>You Focus on Building <br /> We Handle the Workflow.</p>
            <p className='bentoTxt2'>Startup founders shouldn’t spend hours organizing. SupaNote does the heavy lifting, giving you clarity and momentum from day one.</p>
        </div>

        <div className="featuresCards">
            <div className="featureCard">
                <img src={feature1} alt="" />

                <div className="featureTxt">
                    <p>Organize Instantly, Not Manually</p>
                    <p>No more hunting through scattered docs or sticky notes.</p>
                    <p>SupaNote uses AI to auto-tag and group your notes by theme, project, or meeting — keeping everything connected and searchable.</p>
                </div>
            </div>

            <div className="featureCard">
                <img src={feature2} alt="" />

                <div className="featureTxt">
                    <p>Get Smart Recommendations That Actually Help</p>
                    <p>You don’t need to figure out what to do next — we’ll tell you.</p>
                    <p>The AI analyzes your notes and tasks to suggest your top 3 daily priorities, follow-ups, and overdue tasks based on your goals.</p>
                </div>
            </div>

            <div className="featureCard">
                <img src={feature3} alt="" />

                <div className="featureTxt">
                    <p>Think Once. Take Action Forever.</p>
                    <p>Make one note and get a whole plan.</p>
                    <p>Our note-to-action engine turns a single brain dump into structured tasks, timelines, and even follow-up reminders, saving you hours each week.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features