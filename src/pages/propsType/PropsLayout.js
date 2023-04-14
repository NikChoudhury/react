import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PropsLayout() {
    return (
        <div className="container">
            <hr />
            <h1>
                Props and PropsType
            </h1>
            <hr />
            <Outlet />
        </div>

    )
}
