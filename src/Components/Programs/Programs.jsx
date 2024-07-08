import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Programs = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  
    const handleProgramClick = (programId) => {
      // setActiveProgramId(programId);
      switch (programId) {
        case 1:
          navigate("/checklist"); // Navigate to checklist page
          break;
        case 2:
          navigate("/interactive"); // Navigate to interactive page
          break;
        case 3:
          // Implement navigation or logic for Community or other pages
          break;
        default:
          console.error("Unhandled program ID:", programId); // Handle default case or error
      }
    };

  return (
    <div className='programs'>
      <div to="/checklist" className="program" onClick={() => handleProgramClick(1)}>
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Educational Materials</p>
        </div>
      </div>
      <div className="program" onClick={() => handleProgramClick(2)}>
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Interactive Learning</p>
        </div>
      </div>
      <div className="program" onClick={() => handleProgramClick(3)}>
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Community</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
