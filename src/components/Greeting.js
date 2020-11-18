import React, { useState } from 'react';
import {
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";

export default function Greeting(props) {
    const [value, setValue] = useState('')

    const handleUpdate = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        window.location.replace(window.location.href + `/${value}`)
    }

    let match = useRouteMatch()
    return (
        <div>
            <Switch>

                <Route path={`${match.path}/:name`}>
                    <H1name />
                </Route>

                <Route path={match.path}>
                    <h1>Hello, nameless!</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Your name: </label>
                        <input type="text" value={value} onChange={handleUpdate} />
                        <input type="submit" value="submit" />
                    </form>
                    <a href='/home'>Go back to home</a>
                </Route>

            </Switch>
        </div>
    )
}

function H1name() {
    let { name } = useParams()
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <a href='/greeting'>Go back to name input</a> <br />
            <a href='/home'>Go back to home</a>
        </div>
    )
}