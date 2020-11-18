import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    // Link acts as href, so apply css to <a>, not .Link
    return (
        <div>
            <h1>React Playground</h1>
            <ul>
                <li>
                    <Link to='/todo'>Go to Todo</Link>
                </li>
                <li>
                    <Link to='/clock'>Go to Clock</Link>
                </li>
                <li>
                    <Link to='/greeting'>Go to Greeting</Link>
                </li>
            </ul>
        </div>
    )
}