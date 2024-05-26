import React, { useRef } from 'react'
import './Events.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Events = () => {
  
  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='events'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Chloe Ting</h3>
                  <span>UBS, Hong Kong</span>
                </div>
              </div>
              <p>Come join our weekly D&I mingling session this Friday! Feel and be part of the supportive community, where you can meet new people and share stories freely.<br></br>Free snacks and drinks will be served too.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Aditya Agarwal</h3>
                  <span>UBS, Mumbai</span>
                </div>
              </div>
              <p>Come join our weekly D&I mingling session this Friday! Feel and be part of the supportive community, where you can meet new people and share stories freely.<br></br>Free snacks and drinks will be served too.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Hailey Smith</h3>
                  <span>UBS, New York</span>
                </div>
              </div>
              <p>Come join our weekly D&I mingling session this Friday! Feel and be part of the supportive community, where you can meet new people and share stories freely.<br></br>Free snacks and drinks will be served too.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Darrell Wong</h3>
                  <span>UBS, Singapore</span>
                </div>
              </div>
              <p>Come join our weekly D&I mingling session this Friday! Feel and be part of the supportive community, where you can meet new people and share stories freely.<br></br>Free snacks and drinks will be served too.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Events
