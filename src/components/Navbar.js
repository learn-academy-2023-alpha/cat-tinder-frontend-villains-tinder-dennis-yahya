import './Navbar.css'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"


const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false)

const location = useLocation()


// similar to useState but useEffect executes code when a specific dependency changes. In this case setting the navbar to false when the user has navigated to a different page. Thus preventing it from staying open.
useEffect(() => {
    setExpandNavbar(false)
}, [location]);

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
            <Link to='*'> Create </Link>
            <Link to='/VillainEdit'> Update </Link>
            <Link to='/VillainShow'> Show</Link>
        </div>
    </div>
  )
}

export default Navbar