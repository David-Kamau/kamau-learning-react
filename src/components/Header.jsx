import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div><div className="header">
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="hLeft">
            <h1>Devi</h1>
          </div>
          <div className="hRight">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default Header