import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to='/' ><li>Home</li></NavLink>
        <NavLink to='/about' ><li>About</li></NavLink>
        <NavLink to='/contact' ><li>Contact</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar

