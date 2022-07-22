import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo.svg'


function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'> 
      <img src={logo} alt="website logo" width="30px" height="30px" className='navbar--logo'/> 
      <span className='navbar--logoText'> Maglo. </span>
      </Link>
      <ul className='navbar--menu'>
        <li className='navbar--menuItem'>
          <NavLink to="/dashboard">
            
            Dashboard
          </NavLink>
        </li>
        <li className='navbar--menuItem'>
          <NavLink to="/expenses">
            Expenses
          </NavLink>
        </li>
        <li className='navbar--menuItem'>
          <NavLink to="/settings">
            Settings
          </NavLink>
        </li>

      </ul>
      

    </nav>
  )
}

export default Navbar;