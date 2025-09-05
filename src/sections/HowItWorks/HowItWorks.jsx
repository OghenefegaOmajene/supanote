import React from 'react'
import './HowItWorks.css'
import Capsule from '../../components/Capsule/Capsule'
import { IoSettingsOutline } from "react-icons/io5";
import { ImArrowRight } from "react-icons/im";

const HowItWorks = () => {
  return (
    <div className='howitworks'>
        <Capsule title="How It Works" Icon={IoSettingsOutline } />
        <div className='howitworksHead'>
            <p className='howitworksHead1'>It’s That Simple. Just Write, and Let AI  <br />Do the Rest.</p>
            <p className='howitworksHead2'>SupaNote fits into your workflow — not the other way around. Here’s how to get started:</p>
        </div>

        <div className="workflow">
            <div className="workflowCard">
                <h1>1</h1>
                <h3>Capture Your Thoughts</h3>
                <p>Drop in notes, voice memos, or meeting summaries — in plain text or however you think best.</p>
            </div>

            <ImArrowRight className='workflowArrow'/>

            <div className="workflowCard">
                <h1>2</h1>
                <h3>Let AI Organize & Prioritize</h3>
                <p>SupaNote automatically identifies tasks, groups them by context, and gives you a smart daily plan.</p>
            </div>

            <ImArrowRight className='workflowArrow'/>

            <div className="workflowCard">
                <h1>3</h1>
                <h3>Take Action with Clarity</h3>
                <p>Your dashboard shows exactly what to do next, with smart reminders and progress tracking baked in.</p>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks