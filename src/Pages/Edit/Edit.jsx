import React, { useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

export function loader ({ params }) {return params.index};
  
  
const Edit = ( ) => {
    const index = useLoaderData();
    const [task, setTask] = useState('');

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleOnSubmit = () => {
        fetch('/api/edit/' + index, {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                task: task
            })
        })
            .then(handleNavigation('/checklist'))
            .catch(error => console.log(error))
    }
    
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="todo" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Save</button>
        </form>
    )
}

export default Edit
