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

            </div>

            <ImArrowRight className='workflowArrow'/>

            <div className="workflowCard">

            </div>

            <ImArrowRight className='workflowArrow'/>

            <div className="workflowCard">

            </div>
        </div>
    </div>
  )
}

export default HowItWorks