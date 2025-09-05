import React from 'react'
import './PricingCard.css'

const PricingCard = ({
    title, 
    subtitle, 
    price,
    priceSubtext,
    features,
    buttonText,
    buttonColor = '#ffffff',
    buttonTextColor = '#000000',
    textColor = '#ffffff',
    isPopular = false,
    onButtonClick 
}) => {

  return (
    <div className='pricingCard'>
      {isPopular && (
        <div style={popularBadgeStyle}>
          ⭐ Popular
        </div>
      )}
      
      <h2 style={titleStyle}>{title}</h2>
      <p style={subtitleStyle}>{subtitle}</p>
      
      <div style={priceStyle}>
        {price}
        {priceSubtext && <span style={priceSubtextStyle}>{priceSubtext}</span>}
      </div>
      
      <ul style={featuresListStyle}>
        {features.map((feature, index) => (
          <li key={index} style={featureItemStyle}>
            <span style={checkmarkStyle}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <button 
        style={buttonStyle}
        onClick={onButtonClick}
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