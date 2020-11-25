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

    const deleteTask = (index) => {
        const tempTasks = tasks.filter((todo, todoIndex) => {
            return todoIndex !== index
        })
        console.log(index)
        console.log({tempTasks})
        setTasks(tempTasks)
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
                    return (
                        <div key={`Div${index}`}>
                            <li key={`Task${index}`}>{`Task ${task} Index ${index}`}</li>
                            <button onClick={() => { deleteTask(index) }}>Remove task</button>
                        </div>
                    )
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>Add new task:</label>
                <input type="text" value={value} onChange={handleUpdate} />
                <input type="submit" value="Submit" />
            </form> <br />
            <button onClick={deleteTasks}>Delete all tasks</button> <br />
            <a href='/home'>Go back to home</a>
        </div>
    )
}