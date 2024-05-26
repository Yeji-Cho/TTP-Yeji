import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {

  const handleClick = () => {
    window.open('https://www.ubs.com/global/en/our-firm/our-culture/diversity-and-inclusion.html');
  }

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>United By Sharing</h1>
        <p>At UBS, we build a culture of belonging, where employees from all backgrounds and identities can feel recognized and valued, and where everyone can unlock their full potential. Our commitment to Diversity & Inclusion (D&I) enhances collaboration, leading to innovative ideas and strong team dynamics.</p>
        <button className='btn' onClick={handleClick}>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
