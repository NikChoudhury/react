import React from 'react'
import { Link } from 'react-router-dom'

export default function ReactState() {
    return (
        <div className='container'>
            <h1>State and User State</h1>
            <hr />

            <h3>Projects</h3>
            <Link className='link' to="word-counter">Word Couter</Link>
        </div>
    )
}
