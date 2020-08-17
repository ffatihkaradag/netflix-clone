import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
            alt="Netflix Logo"
          />
        </Link>
        <Link to="/login" className="nav__signin">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default Nav
