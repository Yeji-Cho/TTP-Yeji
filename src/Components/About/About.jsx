import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {

  const handleClick = () => {
    window.open('https://www.youtube.com/watch?v=Ll56imVATLk');
  }

  return (
    <div className='about'>
      <div className="about-left">
        <img src={play_icon} alt="" className='play-icon' onClick={handleClick}/>
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>#SpeakUpForInclusion</h3>
        <h2>That Little Voice</h2>
        <p>We've all experienced times when the voice in our head tells us to stay silent when we've seen or have been subjected to non-inclusive behaviour.</p>
        <p>Instead of listening to that little voice, it's time to find yours and use it to #SpeakUpForInclusion.</p>
        <p>Watch this video to learn more about the importance of taking action for D&I.</p>
      </div>
    </div>
  )
}

export default About
