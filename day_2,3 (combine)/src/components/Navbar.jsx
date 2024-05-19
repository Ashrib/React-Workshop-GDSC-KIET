import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>
        <ul className="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/livingroom'>Living room</Link></li>
            <li><Link to='/kitchen'>Kitchen</Link></li>
            <li><Link to='/bathroom'>Bathroom</Link></li>
            <li><Link to='/firstfloor'>firstfloor</Link></li>
        </ul>
        
    </nav>
  )
}

export default Navbar