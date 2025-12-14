import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className='nav-links'>
          <Link to="/">Home</Link>
        </li>
        <li className='nav-links'>
          <Link to="/products">Products</Link>
        </li>
        <li className='nav-links'>
          <Link to="/about">About</Link>
        </li>
        <li className='nav-links'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
