
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Programs from '../../Components/Programs/Programs'
import Title from '../../Components/Title/Title'
import About from '../../Components/About/About'
import Gallery from '../../Components/Gallery/Gallery'
import Events from '../../Components/Events/Events'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='D&I Initiatives' title='Three Approaches'/>
        <Programs handleNavigation={handleNavigation}/>
        <About/>
        <Title subTitle='Gallery' title='Our Moments'/>
        <Gallery/>
        <Title subTitle='Track your Engagement' title='Past Events'/>
        <Events/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default Dashboard;

