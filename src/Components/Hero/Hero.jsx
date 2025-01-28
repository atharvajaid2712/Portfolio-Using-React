import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import resume from '../../assets/Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I'm Atharva Jaid,</span> full stack developer based in India.</h1>
        <p>"Transforming ideas into interactive and responsive web designs as a Front-End Developer."</p>
        <div className="hero-action">
            <div className="hero-connect"><a href='#contact'>Connect with me</a></div>
            <div className="hero-resume"><a href={resume} download>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero
