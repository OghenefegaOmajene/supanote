import React, {useState} from 'react'
import './FAQs.css'
import { ChevronRight } from "lucide-react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import cta from '../../assets/images/cta.png'
import Button from '../../components/Button/Button';
import Capsule from '../../components/Capsule/Capsule';

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How is this different from Notion or other tools?",
      answer: "Our platform focuses specifically on solo builders and early-stage founders, offering AI-powered insights and streamlined workflows that are tailored for individual productivity rather than team collaboration. Unlike Notion's complex block system, we provide a more focused, goal-oriented approach."
    },
    {
      question: "Can I use this offline?",
      answer: "Yes! The app works offline for viewing and editing your existing notes and tasks. Your changes will automatically sync when you reconnect to the internet. However, AI features require an internet connection to function."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption for all data in transit and at rest. Your information is stored securely with regular backups, and we never share your personal data with third parties. You maintain full ownership of your content."
    },
    {
      question: "Can I collaborate with my team?",
      answer: "The Starter plan is designed for individual use, but our Pro plan includes collaboration features that allow you to share specific projects and workspaces with team members. You can control permissions and access levels for each collaborator."
    },
    {
      question: "What platforms is it available on?",
      answer: "We're available on all major platforms: Web app (works in any modern browser), iOS app, Android app, macOS desktop app, and Windows desktop app. All platforms sync seamlessly, so you can switch between devices without missing a beat."
    }
  ];

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
                <span className='faqQuestion'>{faq.question}</span>
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

            {/* <Button 
              className="ctaBtn"
              title="Get Started" 
              Icon={ChevronRight} 
            /> */}
            <Button 
              width="250px"
              height="55px"
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