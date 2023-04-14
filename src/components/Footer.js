import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'
export default function Footer(props) {
    return (
        <footer id='footer'>
            <div className='container'>
                <ul class="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/person">Person</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
