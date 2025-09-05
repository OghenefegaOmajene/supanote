import React from 'react'
import './Testimonials.css'
import Capsule from '../../components/Capsule/Capsule'
import { FaRegStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <Capsule title="Testimonials" Icon={FaRegStar } />
        <div className='howitworksHead'>
            <p className='howitworksHead1'>What Founders Are Saying</p>
            <p className='howitworksHead2'>StartNotesAi is helping startup leaders stay focused, ship faster, and feel in control.</p>
        </div>

        <div className="testimonialGrid">
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div3"></div>
            <div className="div4"></div>
            <div className="div5"></div>
            <div className="div6"></div>
        </div>
    </div>
  )
}

export default Testimonials