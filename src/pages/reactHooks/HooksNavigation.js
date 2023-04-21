import React from 'react'
import { Link } from 'react-router-dom'

export default function HooksNavigation() {
    return (
        <div className='container'>
            <p>React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. </p>
            <ul>
                <li>
                    <Link to="/react-hooks/use-state">useState</Link>
                </li>
                <li>
                    <Link to="/react-hooks/use-effect">useEffect</Link>
                </li>
            </ul>
        </div>
    )
}
