import React from 'react'
import '../css/Footer.css'
import { NavLink } from 'react-router-dom'
export default function Footer(props) {
    return (
        <footer id='footer'>
            <div className='container'>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/props">Props and PropsTypes</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
