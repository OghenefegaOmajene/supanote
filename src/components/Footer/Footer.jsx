import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerBody">
            <div className="footerLogo">
                <img src={logo} alt="" />
                <h2>SupaNote</h2>
            </div>
            <div className="footerLinks">

            </div>
        </div>
        <div className="footerTxt">
            <h1>SupaNote</h1>
        </div>
        
    </div>
  )
}

export default Footer