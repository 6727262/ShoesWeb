import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <nav className='container'>
        <img src="../src/Images/brand_logo.png" alt="" />
        <ul>
        <li>
  <NavLink to="/">Menu</NavLink>
</li>
        <li>Location</li>
        <li><NavLink to={"/about"}>About Us</NavLink></li>

<li>
<NavLink to={"/contact"}>
ContactUs

</NavLink></li>
        </ul>
        <button type='button' className='sm'>Login</button>
      </nav>
    </>
  )
}

export default Navigation
