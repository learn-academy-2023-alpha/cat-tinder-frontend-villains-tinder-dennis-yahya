import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [expandNavbar, setExpandNavbar] = useState(false)



  return (
    // id changes depending on navbar state, in this case applying the open or close styles to the hamburger menu
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => {
              // set state to the opposite of previous value, on button click
              setExpandNavbar((prev) => !prev)
            }}>
            {/* <ReorderIcon/> */}
            </button>
        </div>
        <div className="links">
            <Link to='/'> Home </Link>
            <Link to='/VillainIndex'> Index</Link>
            <Link to='VillainNew'> Create </Link>
            <Link to='/VillainEdit'> Update </Link>
            {/* <Link to='/VillainShow'> Show</Link> */}
        </div>
    </div>
  )
}

export default Header