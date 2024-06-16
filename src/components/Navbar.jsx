import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to= "/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex front-bold shadow-md">
        <p className="blue-gradient_text">
          FB      
        </p>
      </NavLink>
      <nav className="flex text-lg gap-7 front-medium">
      <NavLink to= "/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
        About
      </NavLink>
      <NavLink to= "/projects" className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'}>
        Projects
      </NavLink>
      <NavLink to= "/contact" className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'}>
        Contact
      </NavLink>
      </nav>
    </header>
  )
}

export default Navbar