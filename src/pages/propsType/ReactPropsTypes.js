import React from 'react'
import { Link } from 'react-router-dom'

export default function ReactPropsTypes() {
    return (
        <div className="container">

            <ul>
                <li>
                    <Link to="/props/demopropstype">Example 1</Link>
                </li>
                <li>
                    <Link to="/props/profile">Example 2</Link>
                </li>
                <li>
                    <Link to="/props/person">Example 3</Link>
                </li>

            </ul>
        </div>
    )
}
