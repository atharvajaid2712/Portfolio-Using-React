import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="" />
      <ul className="nav-menu">
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="nav-connect"><a href='#contact'>Connect with Me</a></div>
    </div>
  )
}

export default Navbar
