import React, { useState } from 'react'
import ToDoCard from './ToDoCard';
import ToDoForm from './ToDoForm';

export default function ToDo() {
    const [tasks, setTasks] = useState([]);
    function handleSubmit(event){
        event.preventDefault();
        let newTask = event.target.task.value;
        setTasks([...tasks, newTask])
        event.target.task.value = ''
    }
return (
    <>
    <ToDoForm handleSubmit={handleSubmit} />
    <div className='row'>
        {tasks.map((task, idx) => <ToDoCard task={task} key ={idx} />)}
    </div>
    </>
)

}
