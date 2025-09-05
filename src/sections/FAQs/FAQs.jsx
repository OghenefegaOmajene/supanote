import React, {useState} from 'react'
import './FAQs.css'
import { ChevronRight } from "lucide-react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import cta from '../../assets/images/cta.png'
import Button from '../../components/Button';
import Capsule from '../../components/Capsule/Capsule';

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faqs'>
        
        <div className='howitworksHead'>
          <Capsule title="FAQs" Icon={AiOutlineQuestionCircle } />
          <p className='howitworksHead1'>You’ve Got Questions. We’ve Got Answers.</p>
          <p className='howitworksHead2'>Everything you need to know before getting started.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-button"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className={`faq-arrow ${openIndex === index ? 'open' : ''}`}>
                  ›
                </span>
              </button>
              
              <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                <p className="faq-content-text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta">
          <div className="ctaBox">
            <div className="ctaTxt">
              <h3>Ready to Get Out of Your Head and Into Action?</h3>
              <p>Stop managing chaos. Start executing with clarity.</p>
            </div>

            <Button 
              className="ctaBtn"
              title="Get Started" 
              Icon={ChevronRight} 
            />
          </div>

          <img src={cta} alt="" className='ctaImg'/>
        </div>
    </div>
  )
}

export default FAQs