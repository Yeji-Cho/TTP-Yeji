import React, { useState, useEffect } from 'react'
import './Checklist.css'
import { useNavigate } from 'react-router-dom';

const Checklist = () => {

  const [checklist, setChecklist] = useState([]);
  const [changed, setChanged] = useState(true);

  const navigate = useNavigate();

  const handleNavigation = (path, props) => {
    navigate(path, props);
  };

  useEffect(() => {
      fetch('/api/checklist')
      .then(response => response.json())
      .then(data => setChecklist(data))
      .catch(error => console.error('Error fetching checklist:', error));
    
  }, [changed]);

  useEffect(() => {
    setChanged(false);
  }, [checklist])

  const handleCheck = (index) => {
    fetch('/api/check/' + index)
      .then(setChanged(true))
  }

  const handleDelete = (index) => {
    fetch('/api/delete/' + index, {
      method: 'DELETE',
      
    })
      .then(handleNavigation('/checklist'))
      .then(setChanged(true))
      .catch(error => console.log(error))
  }

  const handleEdit = (index) => {
    navigate('/edit/'+index);
  }

  const buildList = () => {

    const listItems = checklist.map((todo, index) => 
      <li key={index}>
          <input type="checkbox" name="done" checked={ todo['done'] } disabled/>
          <div className="main-link">
            {
              todo['url'] 
              ? <a href={ todo['url'] } style={{ textDecoration: todo['done'] ? 'line-through' :'none' }}>{ todo['task'] }</a>
              : <span style={{ textDecoration: todo['done'] ? 'line-through' :'none' }}>{ todo['task'] }</span>
            }
          </div>
          <div className="action-links">
              <span onClick={() => handleCheck(index)}>Check</span>
              <span onClick={() => handleEdit(index)}>Edit</span>
              <span onClick={() => handleDelete(index)}>Delete</span>
          </div>
      </li>
    );
    return <ul>{listItems}</ul>;
  }

  return (
    <div>
      <h1>Learn the Materials and Track your Learning!</h1>
      {buildList()}
    </div>
  )
}

export default Checklist
