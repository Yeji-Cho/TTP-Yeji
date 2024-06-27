import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import React, { useState, useEffect } from 'react';
import { getPrograms } from '../../API.js';

const Programs = () => {

  const [programs, setPrograms] = useState([]);
  const [activeProgramId, setActiveProgramId] = useState(null);
  const [checklist, setChecklist] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const data = await getPrograms();
      setPrograms(data);
    };
    fetchPrograms();
  }, []);

  const handleMaterialClick = (programId, materialIndex) => {
    const newPrograms = programs.map(program => {
      if (program.id === programId) {
        const newMaterials = program.materials.map((material, index) => {
          if (index === materialIndex) {
            return { ...material, completed: true };
          }
          return material;
        });
        return { ...program, materials: newMaterials };
      }
      return program;
    });
    setPrograms(newPrograms);
  };

  const handleProgramClick = async (programId) => {
    if (programId === 1) {  // '1' is the ID for Educational Materials
      const response = await fetch('http://127.0.0.1:5000/api/checklist');
      const data = await response.json();
      setActiveProgramId(programId);
      setChecklist(data);
    } else {
      setActiveProgramId(programId);
    }
  };

  return (
    <div className='programs'>
      <div className="program" onClick={() => handleProgramClick(1)}>
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Educational Materials</p>
        </div>
      </div>
      {/* Conditionally render the checklist when the Educational Materials program is active */}
      {activeProgramId === 1 && (
        <ul>
          {checklist.map((item, index) => (
            <li key={index}>
              <input type="checkbox" checked={item.done} onChange={() => {}} disabled />
              {item.url ? <a href={item.url} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>{item.task}</a> : <span>{item.task}</span>}
            </li>
          ))}
        </ul>
      )}
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
      {/* Render the programs fetched from the API */}
      {programs.map((program) => (
        <div key={program.id} className="program" onClick={() => handleProgramClick(program.id)}>
          <img src={require(`../../assets/${program.icon}`)} alt={program.title} />
          <div className="caption">
            <img src={require(`../../assets/${program.icon}`)} alt={program.title} />
            <p>{program.title}</p>
          </div>
          {activeProgramId === program.id && (
            <div className="program-content">
              <p>{program.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Programs;
