import React from 'react'
import './TestimonialCard.css'
import { IoIosStar } from "react-icons/io";
import { BiSolidQuoteRight } from "react-icons/bi";

const TestimonialCard = ({testimonial, name, founderImg}) => {
  return (
    <div className='testimonialCard'>
        <p className='testimonialText'>{testimonial}</p>

        <div className="founderInfo">
            
            <div className="profile">
                <img src={founderImg} alt="" />

                <section>
                    <p className='founderName'>{name}</p>

                    <div className="reviewStars">
                        {[...Array(5)].map((_, index) => (
                            <IoIosStar key={index} className="starIcon" />
                        ))}
                    </div>
                </section>
                
            </div>  

            <BiSolidQuoteRight className='quote'/>
            
        </div>
    </div>
  )
}

export default TestimonialCard