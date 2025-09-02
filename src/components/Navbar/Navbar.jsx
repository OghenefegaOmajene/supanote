import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>

        <img src={logo} alt="" />

        <div className='navLinks'>
            <a href="">Home</a>
            <a href="">Features</a>
            <a href="">Testimonials</a>
            <a href="">Pricing</a>
            <a href="">FAQs</a>
        </div>

        <div className='navLinks'>
            <button>Log In</button>
            <button>Sign up</button>
        </div>

    </div>
  )
}

export default Navbar