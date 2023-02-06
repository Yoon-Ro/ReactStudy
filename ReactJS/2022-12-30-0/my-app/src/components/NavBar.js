import "./NavbarStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className='header'>
        <Link to="/">
            <h1>Portfolio</h1>
            </Link>
    </div>
  )
}

export default NavBar