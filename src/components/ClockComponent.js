import React, { useState, useEffect } from 'react';

export default function ClockComponent(props) {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let timerID = setInterval( () => tick(), 1000)
        return function cleanup() {
            clearInterval(timerID)
        }
    })

    function tick() {
        setDate(new Date())
    }

    return (
        <div>
            <h1>It is {date.toLocaleTimeString()}</h1>
            <a href='/home'>Go back to home</a>
        </div>
    )
}
