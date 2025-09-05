import React from 'react'
import './Testimonials.css'
import Capsule from '../../components/Capsule/Capsule'
import { FaRegStar } from "react-icons/fa6";
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import founder1 from '../../assets/images/founder1.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <Capsule title="Testimonials" Icon={FaRegStar } />
        <div className='howitworksHead'>
            <p className='howitworksHead1'>What Founders Are Saying</p>
            <p className='howitworksHead2'>SupaNote is helping startup leaders stay focused, ship faster, and feel in control.</p>
        </div>

        <div className="testimonialGrid">
            <TestimonialCard
                className="div1"
                testimonial="SupaNote is the smartest tool I’ve used all year. I just type in my messy thoughts, and it somehow turns them into a Monday plan. Magic."
                name="Lauren K., Fintech Founder"
                founderImg={founder1}
            />
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