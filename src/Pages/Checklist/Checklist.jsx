import React, { useState, useEffect } from 'react'
import './Checklist.css'
import { useNavigate } from 'react-router-dom';

const Checklist = () => {

  const [checklist, setChecklist] = useState([]);
  const [changed, setChanged] = useState(true);
  const [task, setTask] = useState('');
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/checklist')
    .then(response => response.json())
    .then(data => setChecklist(data))
    .then(setChanged(false))
    .catch(error => console.error('Error fetching checklist:', error));
  }, [changed]);

  const handleCheck = (index) => {
    fetch('/api/check/' + index)
      .then(setChanged(true))
  }

  const handleDelete = (index) => {
    fetch('/api/delete/' + index, {
      method: 'DELETE',
      
    })
    .then(setChanged(true))
    .catch(error => console.log(error))
  }

  const handleEdit = (index) => {
    navigate('/edit/'+index);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetch('/api/add', {
        method: 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
          todo:{
            task: task,
            done: false,
            url: url
          }
        })
    })
    .then(setChanged(true))
    .then(setUrl(''))
    .then(setTask(''))
    .catch(error => console.log(error))
}

  const buildList = () => {

    const listItems = checklist.map((todo, index) => 
      <li key={index} className='list-item'>
          <input className='checkbox' type="checkbox" name="done" checked={ todo['done'] } disabled/>
          <div className="main-link">
            {
              todo['url'] && todo['url'] != ''
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
    return <ul className='checklist'>{listItems}</ul>;
  }

  return (
    <div className='checklist-div'>
      <h1 className='checklist-title'>Learn the Materials and Track your Learning!</h1>
      {buildList()}
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="task" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Title of your material (optional)"/>
        <input type="text" name="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL (optional)"/>
        <button className='form-button' type="submit">Add</button>
      </form>
    </div>
  )
}

export default Checklist
