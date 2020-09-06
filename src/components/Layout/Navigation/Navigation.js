import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <NavLink to="/">Projects</NavLink>
            <NavLink to="/collections">Collections</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}
