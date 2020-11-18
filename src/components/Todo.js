import React, { useState } from 'react';

export default function Todo() {
    // Set initial state and function for changing state
    const [tasks, setTasks] = useState(['Dummy Task'])
    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        tasks.push(value)
        setTasks(tasks)
        setValue('')
    }

    const deleteTasks = () => {
        setTasks([])
    }

    // Handles form value update (ties it to react state so react can take the value by getting value instead of getting the value from event)
    const handleUpdate = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <ul>
                {tasks.filter(task => task.length > 0).map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
                <form onSubmit={handleSubmit}>
                    <label>Add new task:</label>
                    <input type="text" value={value} onChange={handleUpdate} />
                    <input type="submit" value="Submit" />
                </form> <br/>
                <p>If anyone can tell me how to delete just a single tasks tell me</p>
                <button onClick={deleteTasks}>Delete all tasks</button> <br/>
                <a href='/home'>Go back to home</a>
            </ul>
        </div>
    )
}