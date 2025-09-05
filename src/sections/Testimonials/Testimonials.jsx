import React from 'react'
import './Testimonials.css'
import Capsule from '../../components/Capsule/Capsule'
import { FaRegStar } from "react-icons/fa6";
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import founder1 from '../../assets/images/founder1.png'
import founder2 from '../../assets/images/founder2.png'

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
                testimonial="SupaNote is the smartest tool I’ve used all year. I just type in my messy thoughts, and it somehow turns them into a Monday plan. Magic."
                name="The Architect,  Founder"
                founderImg={founder1}
            />
            <TestimonialCard
                className="testimonial4"
                testimonial="SupaNote is the smartest tool I’ve used all year. I just type in my messy thoughts, and it somehow turns them into a Monday plan. Magic."
                name="Lauren K., Fintech Founder"
                founderImg={founder1}
            />
            <TestimonialCard
                className="testimonial5"
                testimonial="SupaNote is the smartest tool I’ve used all year. I just type in my messy thoughts, and it somehow turns them into a Monday plan. Magic."
                name="Lauren K., Fintech Founder"
                founderImg={founder1}
            />
            <TestimonialCard
                className="testimonial6"
                testimonial="SupaNote is the smartest tool I’ve used all year. I just type in my messy thoughts, and it somehow turns them into a Monday plan. Magic."
                name="Lauren K., Fintech Founder"
                founderImg={founder1}
            />
        </div>
    </div>
  )
}

export default Testimonials