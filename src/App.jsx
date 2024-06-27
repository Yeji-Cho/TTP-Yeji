import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Events from './Components/Events/Events'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {

  const [checklist, setChecklist] = useState([]);

    useEffect(() => {
        fetch('/api/checklist')
            .then(response => response.json())
            .then(data => setChecklist(data))
            .catch(error => console.error('Error fetching checklist:', error));
    }, []);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='D&I Initiatives' title='Three Approaches'/>
        <Programs />
        <About/>
        <Title subTitle='Gallery' title='Our Moments'/>
        <Gallery/>
        <Title subTitle='Track your Engagement' title='Past Events'/>
        <Events/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
        
        {/* Display Checklist */}
        <div className="checklist-section">
                    <h2>Checklist</h2>
                    <ul>
                        {checklist.map((item, index) => (
                            <li key={index}>
                                <span>{item.task} - {item.done ? 'Done' : 'Pending'}</span>
                                {item.url && <a href={item.url}>Read More</a>}
                            </li>
                        ))}
                    </ul>
                </div>
      </div>

    </div>
  )
}

export default App
