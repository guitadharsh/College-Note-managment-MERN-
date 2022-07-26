import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="nav-container">
    <div className="nav-logo">
      <Link to="/"><p>NOTE<span>FY</span></p></Link>
    </div>

    <div className="navs">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
  </div>
  </>
  )
}

export default Navbar