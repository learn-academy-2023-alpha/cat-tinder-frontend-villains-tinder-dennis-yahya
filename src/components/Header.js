import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [expandNavbar, setExpandNavbar] = useState(false)



  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => {
              setExpandNavbar((prev) => !prev)
            }}>
            </button>
        </div>
        <div className="links">
            <Link to='/'> Home </Link>
            <Link to='/VillainIndex'> Index</Link>
            <Link to='VillainNew'> Create </Link>
            <Link to='/VillainEdit'> Update </Link>
            
        </div>
    </div>
  )
}

export default Header