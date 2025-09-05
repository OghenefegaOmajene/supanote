import React from 'react'
import './PricingCard.css'
import { PiStarFour } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";

const PricingCard = ({
    title, 
    subtitle, 
    price,
    priceSubtext,
    features,
    buttonText,
    buttonColor,
    buttonTextColor,
    isPopular = false, 
}) => {

  return (
    <div className='pricingCard'>
      {isPopular && (
        <div className='popularBadge'>
          <PiStarFour/> Popular
        </div>
      )}
      
      <div className="pricingContents">
        <h2 className='pricingCardTitle'>{title}</h2>
        <p className='pricingCardSubtitle'>{subtitle}</p>
        
        <div className='pricingCardPrice'>
            {price}
            {priceSubtext && <span className='pricingCardPriceSpan'>{priceSubtext}</span>}
        </div>
        
        <ul>
            {features.map((feature, index) => (
            <li key={index}>
                <IoMdCheckmark className='check'/>
                {feature}
            </li>
            ))}
        </ul>
      </div>
      
      <button 
        style={{
            color: buttonTextColor,
            backgroundColor: buttonColor
        }}
        className='pricingCardBtn'
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default PricingCard