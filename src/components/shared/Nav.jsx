import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/new-order'>New Order</NavLink>
        <NavLink to='/past-orders'>Past Orders</NavLink>
        <NavLink to='/about'>About</NavLink>
    </nav>
)


export default Nav;