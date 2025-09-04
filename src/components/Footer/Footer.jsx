import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerBody">
            <div className="footerLogoBox">
                <div className="footerLogo">
                    <img src={logo} alt="" />
                    <h2>SupaNote</h2>
                </div>
                <p>AI Workspace for Notes and Tasks</p>
            </div>

            <div className="footerLinks">
                <h2>Product</h2>
                <p>Pro</p>
                <p>Teams</p>
            </div>

            <div className="footerLinks">
                <h2>Community</h2>
                <p>X</p>
                <p>GitHub</p>
            </div>
        </div>
        <div className="footerTxt">
            <h1>SupaNote</h1>
        </div>
        
    </div>
  )
}

export default Footer