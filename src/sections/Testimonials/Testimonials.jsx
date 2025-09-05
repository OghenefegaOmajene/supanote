import React from 'react'
import './Testimonials.css'
import Capsule from '../../components/Capsule/Capsule'
import { FaRegStar } from "react-icons/fa6";
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import founder1 from '../../assets/images/founder1.png'
import founder2 from '../../assets/images/founder2.png'
import founder3 from '../../assets/images/founder3.png'
import founder4 from '../../assets/images/founder4.png'
import founder5 from '../../assets/images/founder5.png'
import founder6 from '../../assets/images/founder6.png'

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
                className="testimonial1"
                testimonial="SupaNote is the smartest tool I’ve used all year. I just type in my messy thoughts, and it somehow turns them into a Monday plan. Magic."
                name="Lauren K., Fintech Founder"
                founderImg={founder1}
            />
            <TestimonialCard
                className="testimonial2"
                testimonial="I replaced 3 apps with this one. No joke — it handles my tasks, notes, even reminds me of things I forgot I wrote."
                name="Brian C., Healthtech CEO"
                founderImg={founder2}
            />
            <TestimonialCard
                className="testimonial3"
                testimonial="The daily AI summaries help me refocus every morning. I wish I had this when I was just starting out."
                name="Alex M., YC Founder"
                founderImg={founder3}
            />
            <TestimonialCard
                className="testimonial4"
                testimonial="My productivity shot up since using SupaNote. It’s like having a chief of staff who actually understands me."
                name="Dina S., Edtech Co-Founder"
                founderImg={founder4}
            />
            <TestimonialCard
                className="testimonial5"
                testimonial="This is the only tool I open in the morning now. Everything’s here. Notes, tasks, what I need to do next… all clean and ready."
                name="Mei L., Solo SaaS Builder"
                founderImg={founder5}
            />
            <TestimonialCard
                className="testimonial6"
                testimonial="It’s not just about taking notes. This app actually thinks and helps me get things done — faster than I ever could alone."
                name="Jared T., Product Lead"
                founderImg={founder6}
            />
        </div>
    </div>
  )
}

export default Testimonials