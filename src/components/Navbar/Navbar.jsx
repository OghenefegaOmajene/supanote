import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='navLogo'>
            <img src={logo} alt="" />
            <p>SupaNote</p>
        </div>
            

        <div className='navLinks'>
            <a href="">Home</a>
            <a href="">Features</a>
            <a href="">Testimonials</a>
            <a href="">Pricing</a>
            <a href="">FAQs</a>
        </div>

        <div className='navBtn'>
            
            <button>Log In</button>
            <button>Sign up</button>
        </div>

    </div>
  )
}

export default Navbar