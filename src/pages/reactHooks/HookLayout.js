import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HookLayout() {
    return (
        <>
            <div className='container'>
                <h1>React Hooks</h1>
                <hr />
            </div>
            <Outlet />
        </>
    )
}
